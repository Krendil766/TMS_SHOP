import axios from "axios";
import jwt_decode from 'jwt-decode'
import { ACTION_TYPES } from "../actionsType";

export const changeEmailUser = (email) => {
    return ({
        type: ACTION_TYPES.CHANGE_EMAIL_USER,
        payload: email
    })
}
export const changePasswordUser = (password) => {
    return ({
        type: ACTION_TYPES.CHANGE_PASSWORD_USER,
        payload: password
    })
}
export const changeNameUser = (name) => {
    return ({
        type: ACTION_TYPES.CHANGE_NAME_USER,
        payload: name
    })
}
export const changeImgUser = (img) => {
    return ({
        type: ACTION_TYPES.CHANGE_IMG_USER,
        payload: img
    })
}
export const changePersonUser = (person) => {
    return ({
        type: ACTION_TYPES.CHANGE_PERSON_USER,
        payload: person
    })
}

export const registrationUser = (email, password, img, name, person) => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.REGISTRATION_START
        })

        try {
            const response = await axios.post('http://localhost:3001/tms/user/registration', {
                name,
                email,
                password,
                img,
                person
            })
            // const data = jwt_decode(response.data.token)

            dispatch({
                type: ACTION_TYPES.REGISTRATION_SUCCESS,
                payload: jwt_decode(response.data.token)
            })

        } catch (e) {
            dispatch({
                type: ACTION_TYPES.REGISTRATION_FAILURE,
                payload: e.response.data
            })
        }
    }
}
export const loginUser = (email, password, img) => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.LOGIN_START
        })

        try {
            const response = await axios.post('http://localhost:3001/tms/user/login', {
                email,
                password,
            })

            dispatch({
                type: ACTION_TYPES.LOGIN_SUCCESS,
                payload: jwt_decode(response.data.token)
            })

        } catch (e) {
            dispatch({
                type: ACTION_TYPES.LOGIN_FAILURE,
                payload: e.response.data
            })
        }
    }
}