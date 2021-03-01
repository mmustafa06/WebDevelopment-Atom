import React from "react";
import HeaderCard from "./HeaderCard";
import HeaderLogin from "./HeaderLogin";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
  return (
    <header className="section-header">
      <nav className="navbar p-md-0 navbar-expand-lg navbar-dark border-bottom bg-info text-muted">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTop3"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTop3">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-phone"></i> Telefon: 0212 444 00 11
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Hesabım
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Ödeme Sayfası
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-4">
              <a href="/" className="brand-wrap">
                <img className="logo" src="../images/logo.png" />
              </a>
            </div>
            <div className="col-lg-6 col-sm-12 order-3 order-lg-2">
              <HeaderSearch />
            </div>
            <div className="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
              <div className="d-flex justify-content-end mb-3 mb-lg-0">
                <HeaderLogin />

                <HeaderCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-main navbar-expand-lg border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav3">
            <HeaderMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
