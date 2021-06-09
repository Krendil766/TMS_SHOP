import axios from "axios";

import { ACTION_TYPES } from "../actionsType";

export const getManufacturers = (url) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_MANUFACTURERS_START,
    });

    try {
        const response = await axios.get(url);

      dispatch({
        type: ACTION_TYPES.GET_MANUFACTURERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.GET_MANUFACTURERS_FAILURE,
        payload: e.message,
      });
    }
  };
};
