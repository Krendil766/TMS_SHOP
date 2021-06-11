import { Container } from 'react-bootstrap';

import ContactMap from '../components/ContactMap';
import '../style/contact.css';


const Contact = () => {
    return (

        <Container style={{ height: '100vh' }}>

            <div className="box_contact">
                <h1>Связаться с нами</h1>
                <ContactMap />
                <div className="box_inner">
                    <p>
                        г. Минск, ул. Тимирязева, д.67, оф. 802
                    </p>
                    <div>
                        <h5>Общие вопросы</h5>
                        <p>info@teachmeskills.by</p>
                    </div>
                    <div>
                        <h5>Реклама / маркетинг</h5>
                        <p>marketing@teachmeskills.by</p>
                    </div>
                    <div>
                        <h5>Телефон для связи</h5>
                        <ul>
                            <li>
                                <a href="tel:+375 29 105-59-59">+375 29 105-59-59</a>
                            </li>
                            <li>
                                <a href="tel:+375 29 305-59-59">+375 29 305-59-59</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </Container>

    )
}

export default Contact