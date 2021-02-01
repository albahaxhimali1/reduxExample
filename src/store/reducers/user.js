import createReducer from '../createReducer'
import {SET_USER} from "../types/user.types";

const initialState = {
    user: {}
}

export const user = createReducer(initialState, {
    [SET_USER](state, {payload}) {
        return {
            ...state,
            user: payload
        }
    }
})