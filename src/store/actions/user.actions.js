import axios from "axios";
import {SET_USER} from "../types/user.types";

export function getUser() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://reqres.in/api/users/2');
            dispatch({type: SET_USER, payload: response.data.data})
        } catch (error) {
            console.error(error);
        }
    }
}