import { useHistory } from "react-router-dom";
import {TYPE_ROUTER} from "../const";

const DeviceItem = ({ device: { id, name, price, rating, img } }) => {
  const history = useHistory();
    
  return (
    <div
      onClick={() => {
        history.push(`${TYPE_ROUTER.DEVICE_ROUTER}/${id}`)
      }}
    >
      <h1>{name}</h1>
      <span>{`${price} руб.`}</span>
      <p>{`Рейтинг: ${rating}`}</p>
      <div>
        <img src={img} alt="photo" />
      </div>
    </div>
  );
};

export default DeviceItem;
