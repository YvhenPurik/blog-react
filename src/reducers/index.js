// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
 
export default (history) => combineReducers({
  router: connectRouter(history),
  counter
 
})

