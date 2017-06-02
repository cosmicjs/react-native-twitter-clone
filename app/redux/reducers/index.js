import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: require('./users').default,
})

export default rootReducer;
