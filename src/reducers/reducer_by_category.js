import { GET_BY_CATEGORY} from '../actions/types';

export default function(state = [], action) {

switch (action.type) {
case GET_BY_CATEGORY:

   return action.payload.data

 default:
   return state

  }
}
