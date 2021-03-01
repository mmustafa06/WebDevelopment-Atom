import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import CategoryPage from "./components/pages/CategoryPage.jsx";
import CardPage from "./components/pages/CartPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <HomePage />
    </Route>

    <Route path="/urun/:id">
      <ProductPage />
    </Route>

    <Route path="/kategori/:kategori_url">
      <CategoryPage />
    </Route>

    <Route path="/sepetim">
      <CardPage />
    </Route>

    <Route path="/kayit">
      <RegisterPage />
    </Route>

    <Route path="/giris">
      <LoginPage />
    </Route>
  </Router>,
  document.getElementById("root")
);
