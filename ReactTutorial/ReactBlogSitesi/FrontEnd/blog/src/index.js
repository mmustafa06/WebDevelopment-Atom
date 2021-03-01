import React from "react";
import ReactDOM from "react-dom";
import Anasayfa from "./components/Anasayfa";
import { BrowserRouter as Router, Route } from "react-router-dom";
import YaziSayfasi from "./components/YaziSayfasi";
import AramaSayfasi from "./components/AramaSayfasi";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Anasayfa />
      </Route>

      <Route path="/yazi/:id">
        <YaziSayfasi />
      </Route>

      <Route path="/arama">
        <AramaSayfasi />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
