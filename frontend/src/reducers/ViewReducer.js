import { ACTION_TYPES } from "../actions/actionsType";

const initialState = {
  views: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_VIEWS_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.GET_VIEWS_SUCCESS:
      return {
        ...state,
        views: action.payload,
        loading: false,
      };
    case ACTION_TYPES.GET_VIEWS_FAILURE:
      return {
        ...state,
        error: {text:action.payload,ok:true},
      };
    default:
      return state;
  }
};

export default reducer;
