import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDeviceFind } from '../actions/actionsCreator/DeviceAction'

import { Container, Row, Col } from 'react-bootstrap';

import Manufacturer from "../components/Manufacturer";
import View from "../components/View";
import DeviceAll from "../components/DeviceAll";
import CarouselPage from '../components/Carousel'

const Home = () => {
  const { selectedView } = useSelector(state => state.view)
  const { selectedManufacturer } = useSelector(state => state.manufacturer);
  const { page, limit } = useSelector(state => state.device);

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getDeviceFind(null, null, 10, 2))
  // }, [dispatch])
  // useEffect(() => {
  //   dispatch(getDeviceFind(selectedView, selectedManufacturer, page, 2))
  // }, [dispatch, selectedView, selectedManufacturer, page])


  return (
    <Container>
      <Row className="pt-4">
        <Col md={4}>
          <View />
          <Manufacturer />
        </Col>
        <Col md={8}>
          <CarouselPage />
          <DeviceAll />
        </Col>
      </Row>
    </Container>

  );
};

export default Home;
