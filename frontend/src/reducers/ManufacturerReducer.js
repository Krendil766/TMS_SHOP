import { ACTION_TYPES } from "../actions/actionsType";

const initialState = {
  manufactures: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.GET_MANUFACTURERS_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.GET_MANUFACTURERS_SUCCESS) {
    return {
      ...state,
      manufactures: action.payload,
      loading: false,
    };
  }
  if (action.type === ACTION_TYPES.GET_MANUFACTURERS_FAILURE) {
    return {
      ...state,
      loading:false,
      error: {text:action.payload,ok:true},
    };
  }
  return state;
};

export default reducer;
