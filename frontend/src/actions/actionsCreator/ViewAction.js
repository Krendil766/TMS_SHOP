import { ACTION_TYPES } from "../actionsType";
import axios from "axios";

export const getViews = (url) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_VIEWS_START,
    });

    const response = await axios.get(url);
    try {
      dispatch({
        type: ACTION_TYPES.GET_VIEWS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.GET_VIEWS_FAILURE,
        payload: e.message,
      });
    }
  };
};
