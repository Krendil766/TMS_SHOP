import { Switch, Route, Redirect } from "react-router-dom";
import { TYPE_ROUTER } from "../const";
import { About, Admin, Auth, Basket, Contact, Device, Home, Sales } from "../pages";

const App = () => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth && (
        <div>
          <Route path={TYPE_ROUTER.ADMIN_ROUTER} component={Admin} exact />
          <Route path={TYPE_ROUTER.BASKET_ROUTER} component={Basket} exact />
          <Route path={TYPE_ROUTER.COMMENT_ROUTER} component={Comment} exact />
        </div>
      )}
      <Route path={TYPE_ROUTER.HOME_ROUTER} component={Home} exact />
      <Route path={TYPE_ROUTER.ABOUT_ROUTER} component={About} exact />
      <Route path={TYPE_ROUTER.SALES_ROUTER} component={Sales} exact />
      <Route path={TYPE_ROUTER.CONTACT_ROUTER} component={Contact} exact />
      <Route path={TYPE_ROUTER.REGISTRATION_ROUTER} component={Auth} exact />
      <Route path={TYPE_ROUTER.LOGIN_ROUTER} component={Auth} exact />
      <Route path={TYPE_ROUTER.DEVICE_ROUTER+"/:id"} component={Device} exact />
      <Route render={() => <h2>Такой страницы не существует</h2>} />
    </Switch>
  );
};

export default App;
