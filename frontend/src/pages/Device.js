import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDeviceOne } from "../actions/actionsCreator/DeviceAction";

const Device = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/tms/device/${id}`;
  console.log(id);

  const dispatch = useDispatch();
  const deviceItem = useSelector((state) => state.device.devices);
  console.log(deviceItem);

  const { name, price, rating, img, manufacturerId, viewId, info, description } = deviceItem;

  useEffect(() => {
    dispatch(getDeviceOne(url));
  }, []);

  return (
    <ul>
      <li>{name}</li>
      <li>{price}</li>
      <li>{rating}</li>
      <img src={'http://localhost:3001/' + img} alt="photo" />
      <li>{manufacturerId}</li>
      <li>{viewId}</li>
      <li>{description}</li>
    </ul>
  )
};

export default Device;
