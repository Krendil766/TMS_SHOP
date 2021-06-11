import { Container, Nav, Navbar } from "react-bootstrap"
import { TYPE_ROUTER } from "../const";
import '../style/footer.css'

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className='m-auto'>
            <Container  >
                <div className='footer'>
                    <div className="logo">
                        TMS SHOP
                    </div>
                    <ul className="social" style={{ display: "flex", alignItems: "center" }}>
                        <li>
                            <a href="https://www.instagram.com/oleg.kudelko/?hl=ru"><i class="fab fa-instagram"></i>oleg.kudelko</a>
                        </li>
                        <li>
                            <a href="https://github.com/Krendil766"><i class="fab fa-github"></i>Krendil766</a>
                        </li>
                        <li> <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BA%D1%83%D0%B4%D0%B5%D0%BB%D1%8C%D0%BA%D0%BE-14ab561a3/">
                            <i class="fab fa-linkedin"></i>Олег Куделько</a></li>
                    </ul>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer