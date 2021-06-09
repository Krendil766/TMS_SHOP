import axios from "axios";

import { ACTION_TYPES } from "../actionsType";

export const getDevice = (url) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_DEVICE_START,
    });

    try {
      const response = await axios.get(url);
      dispatch({
        type: ACTION_TYPES.GET_DEVICE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.GET_DEVICE_FAILURE,
        payload: e.message,
      });
    }
  };
};
export const getDeviceOne = (url) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_DEVICE_START,
    });

    try {
      const response = await axios.get(url);
      dispatch({
        type: ACTION_TYPES.GET_DEVICE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.GET_DEVICE_FAILURE,
        payload: e.message,
      });
    }
  };
};

