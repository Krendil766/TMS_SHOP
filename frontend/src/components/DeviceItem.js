import { Container, Col, Card, Image, Row, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TYPE_ROUTER } from '../const';
import star from '../picture/star.png'

const DeviceItem = ({ device: { id, name, price, rating, img, manufacturerId } }) => {
  const history = useHistory();
  const click = (id) => {
    history.push(`${TYPE_ROUTER.DEVICE_ROUTER}/${id}`)
  }
  const manufacturerArr = useSelector((state) => state.manufacturer);
  const { manufactures } = manufacturerArr;

  const arrRating = Array.apply(null, { length: rating })
  return (
    <Col
      style={{ margin: '20px', text: 'center' }}
      md={3}
      onClick={() => { click(id) }}
    >
      <Card style={{ width: '200px', cursor: 'pointer' }} border={"light"}>
        <Card.Title style={{ textAlign: 'center' }}>
          {
            manufactures.map(item => {
              if (manufacturerId == item.id) {
                return (
                  <div>{item.name}</div>
                )
              }
            })
          }
        </Card.Title>
        <Image
          style={{margin:'0 auto'}}
          width={150}
          height={150}
          src={`http://localhost:3001/${img}`}
        />

        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span >
              Рейтинг
              {
                arrRating.map(item => {
                  if (item == undefined) {
                    return (
                      <img style={{ width: '12px' }} src={star} alt="" />
                    )
                  }
                })
              }
            </span>
          </div>
        </div>
        <div>{name}</div>
        <div>
          <span>Цена
            <Badge pill variant="success">
              {price} руб.
            </Badge></span></div>
      </Card>
    </Col>
  )
};

export default DeviceItem;
