import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { changeEmailUser, changePasswordUser, changeImgUser, changeNameUser, changePersonUser, registrationUser } from '../actions/actionsCreator/UserAction';

const Registration = () => {
    const email = useSelector(state => state.user.email);
    const password = useSelector(state => state.user.password);
    const name = useSelector(state => state.user.name);
    const img = useSelector(state => state.user.img);
    const person = useSelector(state => state.user.person);

    const dispatch = useDispatch();

    const click = () => {
        dispatch(registrationUser(email, password, img, name, person))
    }

    const clickImg = (e) => {
        const img = e.target.value;

        dispatch(changeImgUser(img))
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">
                    Регистрация
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваше имя..."
                        value={name}
                        onChange={(e) => dispatch(changeNameUser(e.target.value))}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={(e) => dispatch(changeEmailUser(e.target.value))}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={(e) => dispatch(changePasswordUser(e.target.value))}
                        type="password"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Права пользователя"
                        value={person}
                        onChange={(e) => dispatch(changePersonUser(e.target.value))}
                    />
                    <Form.File
                        className="mt-3"
                        onChange={(e) => clickImg(e)}
                    />
                    <Row
                        className="d-flex justify-content-between mt-3 pl-3 pr-3"
                        style={{ fontSize: "12px" }}
                    >
                        <div>
                            Войти
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}>
                            Регистрация
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Registration;