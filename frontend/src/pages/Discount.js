import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getDevice } from "../actions/actionsCreator/DeviceAction";
import { Container, Card, Button, Row, Col, Badge, Spinner, Modal } from 'react-bootstrap';

import sales from '../picture/sales.svg';
import { TYPE_ROUTER } from "../const";





const Discount = () => {
  const [show, setShow] = useState(true);
  const url = "http://localhost:3001/tms/device";
  const dispatch = useDispatch();
  const history = useHistory();

  const device = useSelector((state) => state.device);
  const { devices, error, loading } = device;

  const discountList = devices.rows && devices.rows.filter(item => item.rating > 6)

  useEffect(() => {
    dispatch(getDevice(url));
  }, [dispatch]);

  return (
    <Container style={{ height: '100vh' }}>
      {loading &&
        <div><Spinner style={{ width: '100px', height: '100px', }} animation="grow" />Loading...</div>}
      {(error.ok) &&
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{error.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShow(false)}
            >Close</Button>
          </Modal.Footer>
        </Modal>
      }
      <Row >
        {discountList && discountList.map(({ name, id, price, rating, img, description }) => {
          return (
            <Col
              className={'mt-3'}
              key={id}
            >
              <Card
                style={{ width: '18rem', height: '18rem', cursor: 'pointer' }}
                onClick={() => { history.push(`${TYPE_ROUTER.DEVICE_ROUTER}/${id}`) }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:3001/${img}`}
                  style={{ height: '100px', width: '100px', margin: '5px auto' }}
                />
                <Card.Body style={{ margin: 'auto' }}>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text style={{ fontSize: '12px', height: '40%', overflow: 'auto' }}>
                    {description}
                  </Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Badge
                      variant="warning"
                      style={{ marginRight: '10px' }}
                    >
                      <h5>
                        {`${price} руб. `}
                        <img src={sales} alt="" style={{ width: '30px' }} />
                      </h5>
                    </Badge>
                    <Button variant="success">Buy</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
};

export default Discount;
