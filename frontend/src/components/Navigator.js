import React from "react";
import { Navbar, Nav, Container, Button, Image, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { TYPE_ROUTER } from "../const";
import basket from '../picture/basket.svg';
import ava from '../picture/аватарка.jpg';

const Navigator = () => {
  const isAuth = false;
  const isPerson = "ADMIN"
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav style={{ fontSize: '30px' }} className='mr-5'>
          <Nav.Link
            style={{ color: "white", border: '1px solid white' }}
            href={TYPE_ROUTER.HOME_ROUTER}>
            TMS SHOP
          </Nav.Link >

        </Nav>
        <Nav className="mr-auto" style={{ color: "white" }}>
          <Nav.Link href={TYPE_ROUTER.HOME_ROUTER}>Home</Nav.Link >
          <Nav.Link href={TYPE_ROUTER.CUSTOMER_REWIEWS_ROUTER}>Customer</Nav.Link >
          <Nav.Link href={TYPE_ROUTER.DISCOUNT_ROUTER}>Discount</Nav.Link >
          <Nav.Link href={TYPE_ROUTER.CONTACT_ROUTER}>Contact</Nav.Link >
        </Nav>
        <Nav className='d-flex align-items-center'>
          {
            isAuth ?
              <>
                <Card style={{ backgroundColor: 'inherit', border:'none' }}>
                  <Image src={ava} width='50px' height='50px' roundedCircle />
                  <Card.Text style={{ color: '#b3b3b3' }}>Name</Card.Text>
                </Card>
                <Nav.Link href={TYPE_ROUTER.BASKET_ROUTER} >
                  <Image src={basket} />
                </Nav.Link>
                <Nav.Link href={TYPE_ROUTER.LOGIN_ROUTER}>
                  <Button variant="outline-light">
                    Выйти
                  </Button>
                </Nav.Link>
                {
                  isPerson === 'ADMIN' &&
                  <Nav.Link href={TYPE_ROUTER.ADMIN_ROUTER}>
                    <Button variant="outline-light">
                      Админка
                    </Button>
                  </Nav.Link>

                }
              </>
              :
              <>
                <Nav.Link href={TYPE_ROUTER.LOGIN_ROUTER}>
                  <Button variant="outline-light">
                    Войти
                  </Button>
                </Nav.Link><Nav.Link href={TYPE_ROUTER.REGISTRATION_ROUTER}>
                  <Button variant="outline-light">
                    Регистрация
                  </Button>
                </Nav.Link>
              </>
          }
        </Nav>

      </Container>
    </Navbar >
  );
};

export default Navigator;
