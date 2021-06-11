import { ACTION_TYPES } from "../actions/actionsType";

const initialState = {
    name: '',
    img: '',
    email: '',
    password: '',
    person: '',
    userData: [],
    isLoading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_EMAIL_USER:
            return {
                ...state,
                email: action.payload
            }
        case ACTION_TYPES.CHANGE_PASSWORD_USER:
            return {
                ...state,
                password: action.payload
            }
        case ACTION_TYPES.CHANGE_NAME_USER:
            return {
                ...state,
                name: action.payload
            }
        case ACTION_TYPES.CHANGE_IMG_USER:
            return {
                ...state,
                img: action.payload
            }
        case ACTION_TYPES.CHANGE_PERSON_USER:
            return {
                ...state,
                person: action.payload
            }
        case ACTION_TYPES.REGISTRATION_START:
            return {
                ...state,
                isLoading: true
            }
        case ACTION_TYPES.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                email: '',
                password: '',
                name: '',
                img: '',
            }
        case ACTION_TYPES.REGISTRATION_FAILURE:
            return {
                ...state,
                error: { text: action.payload, ok: true },
            }
        case ACTION_TYPES.LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                email: '',
                password: '',
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                error: { text: action.payload, ok: true },
            }

        default:
            return state
    }
}
export default reducer;