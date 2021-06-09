import { ACTION_TYPES } from "../actions/actionsType";

const initialState = {
    name:'',
    email:'',
    password: '',
    userData: [],
    isLoading: false,
    error:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_EMAIL_USER:
            return {
                ...state,
                email:action.payload
            }
        case ACTION_TYPES.CHANGE_PASSWORD_USER:
            return {
                ...state,
                password:action.payload
            }
    
        default:
            return state
    }
}
export default reducer;