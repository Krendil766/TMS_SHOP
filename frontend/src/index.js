import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { compose, applyMiddleware, createStore } from "redux";

import App from "./components/App";
import Navigator from "./components/Navigator";
import { Footer } from "./pages";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigator />
        <App />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
