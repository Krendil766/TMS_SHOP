import { useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDevice } from "../actions/actionsCreator/DeviceAction";

const Device = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/tms/device/${id}`;

  const dispatch = useDispatch();
  const deviceItem = useSelector((state) => state.device.devices);
  const { name, price, rating, img, manufacturerId, viewId, info } = deviceItem;

  useEffect(() => {
    dispatch(getDevice(url));
  }, [dispatch]);

  return (
      <ul>
          <li>{name}</li>
          <li>{price}</li>
          <li>{rating}</li>
          <li>{img}</li>
          <li>{manufacturerId}</li>
          <li>{viewId}</li>
          <li>{info}</li>
      </ul>
  )
};

export default Device;
