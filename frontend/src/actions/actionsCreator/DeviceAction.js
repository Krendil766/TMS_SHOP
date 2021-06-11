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

export const getDeviceFind = (viewId, manufacturerId, limit, page) => {
  return async (dispatch) => {

    dispatch({
      type: ACTION_TYPES.GET_DEVICE_FIND_START
    })

    try {
      const response = await axios.get('http://localhost:3001/tms/device', {
        params: {
          viewId, manufacturerId, limit, page
        }
      })

      dispatch({
        type: ACTION_TYPES.GET_DEVICE_FIND_SUCCESS,
        payload:response.data
      })
    } catch (e) {
      dispatch({
        type: ACTION_TYPES.GET_DEVICE_FIND_FAILURE,
        payload:e.response.data
      })
    }
  }
}

