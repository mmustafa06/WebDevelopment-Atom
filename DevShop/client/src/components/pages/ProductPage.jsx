import React from "react";
import Footer from "../public/Footer.jsx";
import Header from "../public/Header.jsx";
import ProductComments from "../public/ProductComments.jsx";
import ProductDetail from "../public/ProductDetail.jsx";

const ProductPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <ProductDetail />
      <ProductComments />
      <Footer />
    </React.StrictMode>
  );
};

export default ProductPage;
