import DeviceItem from "./DeviceItem";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDevice } from "../actions/actionsCreator/DeviceAction";

const DeviceAll = () => {
  const url = "http://localhost:3001/tms/device";
  const dispatch = useDispatch();
  const deviceArr = useSelector((state) => state.device);
  const { devices, error, loading } = deviceArr;


  useEffect(() => {
    dispatch(getDevice(url));
  }, [dispatch]);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error.ok) {
    return <div>{error.text}</div>;
  }

  return (
    <div>
     {devices.rows&&devices.rows.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceAll;
