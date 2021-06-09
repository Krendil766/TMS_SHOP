import { useHistory } from "react-router-dom";
import { TYPE_ROUTER } from "../const";

const DeviceItem = ({ device: { id, name, price, rating, img } }) => {
  const history = useHistory();
  const click = (id) => {
    history.push(`${TYPE_ROUTER.DEVICE_ROUTER}/${id}`)

  }
  return (
    <div
      onClick={() => {
        click(id)
      }}
      style={{ background: "brown", marginBottom: '5px', cursor: 'pointer' }}
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
