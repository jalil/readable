import { GET_ALL_CATEGORY} from '../actions/';

export default function(state = [], action) {

switch (action.type) {
case GET_ALL_CATEGORY:

   return action.payload.data.categories

 default:
   return state

  }
}
