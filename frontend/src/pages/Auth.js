import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { changeEmailUser, changePasswordUser, loginUser } from '../actions/actionsCreator/UserAction';

const Auth = () => {
    const email = useSelector(state => state.user.email);
    const password = useSelector(state => state.user.password);
    console.log(email);


    const dispatch = useDispatch();

    const click = () => {
        dispatch(loginUser(email, password))
        console.log(1);
        

    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">
                    {/* {isLogin ? "Авторизация" : "Регистрация"} */}
                    Авторизация
                </h2>
                <Form className="d-flex flex-column">
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
                    <Row
                        className="d-flex justify-content-between mt-3 pl-3 pr-3"
                        style={{ fontSize: "12px" }}
                    >
                        <div>
                            {/* {isLogin ? (
                                <Link to={TYPE_ROUTER.REGISTRATION_ROUTER}>
                                    Зарегестрироваться
                                </Link>
                            ) : (
                                <Link to={TYPE_ROUTER.LOGIN_ROUTER}>Войти</Link>
                            )} */}
                            Зарегестрироваться
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}>
                            {/* {isLogin ? "Войти" : "Регистрация"} */}

                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth