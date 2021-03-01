import React from "react";
import CategoryInfo from "../public/CategoryInfo";
import CategoryFilter from "../public/CategoryFilter";
import CategoryProducts from "../public/CategoryProducts";
import Footer from "../public/Footer";
import Header from "../public/Header";

const CategoryPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <CategoryInfo />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <CategoryFilter />
            <CategoryProducts />
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default CategoryPage;
