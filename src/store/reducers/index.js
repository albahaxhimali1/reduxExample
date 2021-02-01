import { combineReducers } from 'redux'
import * as userReducer from './user'
import * as countriesReducer from './countries'

export default combineReducers(
    Object.assign(userReducer, countriesReducer)
)