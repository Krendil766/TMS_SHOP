import Manufacturer from "../components/Manufacturer";
import View from "../components/View";
import DeviceAll from "../components/DeviceAll";

const Home = () => {
  return (
    <div>
      <Manufacturer />
      <hr />
      <View />
      <hr />
      <DeviceAll />
    </div>
  );
};

export default Home;
