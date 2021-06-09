import React from "react";
import { Link } from "react-router-dom";
import { TYPE_ROUTER } from "../const";
import img from "../picture/test.jpg";

const Navigator = () => {
  const isAuth = false;
  return (
    <nav >
      <h1>
        <Link to={"/home"}>TMS SHOP</Link>
      </h1>
      <div>
        <Link to={TYPE_ROUTER.HOME_ROUTER}>Home</Link>
        <Link to={TYPE_ROUTER.ABOUT_ROUTER}>About</Link>
        <Link to={TYPE_ROUTER.DISCOUNT_ROUTER}>Discount</Link>
        <Link to={TYPE_ROUTER.CONTACT_ROUTER}>Contact</Link>
      </div>
      {isAuth ? (
        <div>
          <div style={{display:"flex", alignItems:"center"}}>
            <p>Aleh</p>
            <img style={{borderRadius:"50%", width:"80px", height:"80px"}} src={img} alt="photo" />
          </div>
          <Link to={TYPE_ROUTER.ADMIN_ROUTER}>
            <button>Админка</button>
          </Link>
          <Link to={TYPE_ROUTER.LOGIN_ROUTER}>
            <button>Выйти</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to={TYPE_ROUTER.LOGIN_ROUTER}>
            <button>Войти</button>
          </Link>
          <Link to={TYPE_ROUTER.REGISTRATION_ROUTER}>
            <button>Регистрация</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigator;
