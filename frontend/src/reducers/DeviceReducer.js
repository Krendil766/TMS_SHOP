import { ACTION_TYPES } from "../actions/actionsType";

// viewId, manufacturerId, limit, page

const initialState = {
  devices: [],
  loading: false,
  error: false,
  item: [],
  page: 1,
  totalCount: 0,
  limit: 15,
  deviceFind: []
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
        loading: false,
        error: { text: action.payload, ok: true },
      };
    case ACTION_TYPES.GET_DEVICE_FIND_START:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.GET_DEVICE_FIND_SUCCESS:
      return {
        ...state,
        loading: false,
        devices: action.payload.rows,
        totalCount: action.payload.count,
      };
    case ACTION_TYPES.GET_DEVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: { text: action.payload, ok: true },
      };
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
    case ACTION_TYPES.GET_DEVICE_FIND_FAILURE:
      return {
        ...state,
        loading: false,
        error: { text: action.payload, ok: true },
      };

    default:
      return state;
  }
};
export default reducer;
