import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Button, Row, Badge } from 'react-bootstrap';
import { getDeviceOne } from "../actions/actionsCreator/DeviceAction";

import star from '../picture/star.png';

const Device = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/tms/device/${id}`;
  const dispatch = useDispatch();
  const deviceItem = useSelector((state) => state.device.devices);
  console.log(deviceItem);

  const { name, price, rating, img, manufacturerId, viewId, info, description } = deviceItem;

  useEffect(() => {
    dispatch(getDeviceOne(url));
  }, []);
  const arrRating = Array.apply(null, { length: rating })

  return (
    <Container >
      <Card className='m-5'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Card.Title className='m-5'>
            <h3>
              {name}
            </h3>
          </Card.Title>
          <Badge
            variant="warning"
            style={{ height: '40px', marginRight: '40px' }}
          >
            <h5>
              {`${price} руб. `}
            </h5>
          </Badge>
        </Row>

        <Card.Img
          variant="top"
          style={{ width: '200px', margin: '10px auto' }}
          src={'http://localhost:3001/' + img}
        />
        <Card.Body>
          <Card.Text>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <h5>Рейтинг:</h5>
                <span >
                  {
                    arrRating.map(item => {
                      if (item == undefined) {
                        return (
                          <img style={{ width: '20px' }} src={star} alt="" />
                        )
                      }
                    })
                  }
                </span>
              </div>

              <div>
                <h5>Описание:</h5>
                {description}
              </div>

            </div>
            <Row className="d-flex flex-column m-3">
              <h5>Характеристики</h5>
              {info && info.map((info, index) =>
                <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                  {info.title}: {info.description}
                </Row>
              )}
            </Row>
          </Card.Text>
          <Button variant="primary">Add to basket</Button>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default Device;


{/* <ul>
<li>{name}</li>
<li>{price}</li>
<li>{rating}</li>
<img src={'http://localhost:3001/' + img} alt="photo" />
<li>{manufacturerId}</li>
<li>{viewId}</li>
<li>{description}</li>
</ul> */}