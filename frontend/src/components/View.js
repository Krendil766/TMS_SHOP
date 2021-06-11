import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getViews, setSelectedView } from "../actions/actionsCreator/ViewAction";

import { ListGroup, Spinner, Modal, Container, Button, Accordion, Card } from 'react-bootstrap';

const View = () => {
  const [show, setShow] = useState(true);

  const url = "http://localhost:3001/tms/view";
  const dispatch = useDispatch();
  const viewArr = useSelector((state) => state.view);


  const { views, loading, error, selectedView } = viewArr;
  const onSetView = (item) => {
    dispatch(setSelectedView(item))
  }

  useEffect(() => {
    dispatch(getViews(url));
  }, [dispatch, setSelectedView]);

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
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              <h2>Каталог</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ListGroup as="ul">
              {
                views.map(item => {
                  return (
                    <ListGroup.Item
                      as="li"
                      key={item.id}
                      active={item.id == selectedView.id}
                      onClick={() => onSetView(item)}
                    >
                      <h4>
                        {item.name}
                        <img
                          style={{ width: '30px', height: '30px', marginLeft: '5px' }}
                          src={`http://localhost:3001/${item.img}`}
                          alt="" />
                      </h4>
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>



    </Container>

  );
};

export default View;


{/* <div>
{views.map((item) => {
  return <div key={item.id} style={{display:'flex'}}>
    <h4>{item.name}</h4>
    <img
      style={{width:'30px', height:'30px', marginLeft:'5px'}}
      src={`http://localhost:3001/${item.img}`}
      alt="" />
  </div>;
})}
</div> */}