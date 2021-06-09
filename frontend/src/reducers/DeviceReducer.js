import { ACTION_TYPES } from "../actions/actionsType";

const initialState = {
  devices: [],
  loading: false,
  error: false,
  item:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_DEVICE_START:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.GET_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        devices: action.payload,
      };
    case ACTION_TYPES.GET_DEVICE_FAILURE:
      return {
        ...state,
        loading:false,
        error: { text: action.payload, ok: true },
      };

    default:
      return state;
  }
};
export default reducer;
