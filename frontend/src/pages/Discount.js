import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";



const Discount = () => {
  const deviceList = useSelector((state) => state);
  console.log(deviceList);
  // const discountList = deviceList.map((item) => item.rating < 5);

  return (
    <div>
      {/* {discountList.map(({ name, id, price, rating, img, info }) => {
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
      })} */}
    </div>
  );
};

export default Discount;
