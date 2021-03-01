import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import HomePage_New from "../public/HomePage_New";
import HomePage_Popular from "../public/HomePage_Popular";
import HomePage_Top from "../public/HomePage_Top";

const HomePage = () => {
  return (
    <React.StrictMode>
      <Header />
      <HomePage_Top />
      <HomePage_Popular />
      <HomePage_New />
      <Footer />
    </React.StrictMode>
  );
};

export default HomePage;
