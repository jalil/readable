import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk,promise)
  )
)

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker();
