import { Link } from "react-router-dom";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { TYPE_ROUTER } from "../utils/const";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={TYPE_ROUTER.HOME_ROUTER}>TMS STORE</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to={TYPE_ROUTER.HOME_ROUTER}>Home</Link>
          <Link to={TYPE_ROUTER.ABOUT_ROUTER}>About</Link>
          <Link to={TYPE_ROUTER.SALES_ROUTER}>Sales</Link>
          <Link to={TYPE_ROUTER.CONTACT_ROUTER}>Contact</Link>
        </Nav>
        <Button variant="outline-info" className="mr-2">
          Войти
        </Button>
        <Button variant="outline-info">Регистрация</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
