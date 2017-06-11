import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: require('./users').default,
  posts: require('./posts').default,
})

export default rootReducer;
