import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Modal, Form, Col, Row, ListGroup, Accordion, Card, Button, Spinner } from 'react-bootstrap';

import { getManufacturers, setSelectedManufacturer } from "../actions/actionsCreator/ManufacturerAction";


const Manufacturer = () => {
  const [show, setShow] = useState(true);

  const url = "http://localhost:3001/tms/manufacturer";
  const dispatch = useDispatch();
  const manufacturerArr = useSelector((state) => state.manufacturer);
  const { manufactures, error, loading, selectedManufacturer } = manufacturerArr;

  useEffect(() => {
    dispatch(getManufacturers(url));
  }, [dispatch]);

  const onSetManufacturer = (item) => {
    dispatch(setSelectedManufacturer(item))
  }

  return (
    <Container>
      {loading &&
        <div><Spinner style={{ width: '100px', height: '100px', }} animation="grow" />Loading...</div>}
      {
        (error.ok) &&
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
      <Accordion defaultActiveKey="0">
        <Card style={{ marginTop: '20px' }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              <h2>Производители</h2>

            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ListGroup as="ul" style={{ margin: '20px -68px 20px 15px' }}>
              <Form className='form_manufacturer'>
                <Row style={{ marginRight: '0' }}>
                  {manufactures.map((item) => {
                    return (
                      <Col md={5}>
                        <ListGroup.Item
                          as="li"
                          active={item.id == selectedManufacturer.id}
                        >
                          <Form.Check
                            key={item.id}
                            type="checkbox"
                            label={
                              <img
                                style={{ width: '50px', height: '50px', marginLeft: '5px' }}
                                src={`http://localhost:3001/${item.img}`}
                                alt="" />
                            }
                            id={item.name}
                            onClick={e => onSetManufacturer(item)}
                          />

                        </ListGroup.Item>

                      </Col>
                    )
                  })}
                </Row>
              </Form>
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>

  );
};

export default Manufacturer;
