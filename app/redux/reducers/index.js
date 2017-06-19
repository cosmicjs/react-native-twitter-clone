import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: require('./users').default,
  posts: require('./posts').default,
})

export default rootReducer;
