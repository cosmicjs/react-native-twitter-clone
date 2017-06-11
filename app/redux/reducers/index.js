import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: require('./users').default,
  posts: require('./posts').default,
  scenes: require('./scenes').default,
})

export default rootReducer;
