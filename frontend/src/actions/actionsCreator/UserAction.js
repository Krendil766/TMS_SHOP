import axios from "axios";
import { ACTION_TYPES } from "../actionsType";

export const changeEmailUser = (email) => {
    return ({
        type: ACTION_TYPES.CHANGE_EMAIL_USER,
        payload:email
    })
}
export const changePasswordUser = (password) => {
    return ({
        type: ACTION_TYPES.CHANGE_PASSWORD_USER,
        payload:password
    })
}

export const registrationUser = (email, password, img) => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.LOGIN_START
        })

        try {
            const response = await axios.post('http://localhost:3001/tms/user/registration', {
                email,
                password,
                img
            })

            dispatch({
                type: ACTION_TYPES.LOGIN_SUCCESS,
                payload: response.data
            })

        } catch (e) {
            dispatch({
                type: ACTION_TYPES.LOGIN_FAILURE,
                payload:e.message
            })
        }
    }
}