import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getManufacturers } from "../actions/actionsCreator/ManufacturerAction";

const Manufacturer = () => {
  const url = "http://localhost:3001/tms/manufacturer";
  const dispatch = useDispatch();
  const manufacturerArr = useSelector((state) => state.manufacturer);
  const { manufactures, error, loading } = manufacturerArr;

  useEffect(() => {
    dispatch(getManufacturers(url));
  }, [dispatch]);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error.ok) {
    return <div>{error.text}</div>;
  }

  return (
    <div>
      {manufactures.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Manufacturer;
