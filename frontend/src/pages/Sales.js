import { useSelector } from "react-redux";
import { useEffect } from "react";

const Discount = () => {
  const deviceList = useSelector((state) => state.device.devices.rows);
  console.log(deviceList);
  const discountList = deviceList.filter((item) => item.rating < 5);

  return (
    <div>
      {discountList.map(({ name, id, price, rating, img, info }) => {
       return(
        <div key={id}>
        <ul>
          <li>{name}</li>
          <li>{price}</li>
          <li>{rating}</li>
          <li>{img}</li>
          <li>{info}</li>
        </ul>
      </div>
       )
      })}
    </div>
  );
};

export default Discount;
