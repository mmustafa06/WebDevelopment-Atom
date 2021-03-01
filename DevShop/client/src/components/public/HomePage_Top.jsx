import React from "react";
const HomePage_Top = () => {
  return (
    <React.StrictMode>
      <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="intro-banner-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="shadow-sm card-banner">
                  <div className="p-4" style={{ width: "75%" }}>
                    <h5 className="card-title">iPad Pro</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk .
                    </p>
                  </div>
                  <img
                    alt=""
                    src="../images/banners/banner-item1.jpg"
                    height="150"
                    className="img-bg"
                  />
                </div>
                <div className="shadow-sm card-banner mt-2">
                  <div className="p-4" style={{ width: "70%" }}>
                    <h5 className="card-title">Smart Watch</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk.
                    </p>
                  </div>
                  <img
                    alt=""
                    src="../images/banners/banner-item2.jpg"
                    height="150"
                    className="img-bg"
                  />
                </div>
                <div className="shadow-sm card-banner  mt-2">
                  <div className="p-4" style={{ width: "75%" }}>
                    <h5 className="card-title">Great drones</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk.
                    </p>
                  </div>
                  <img
                    src="../images/banners/banner-item3.jpg"
                    height="150"
                    className="img-bg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div
                  id="carousel1_indicator"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="images/banners/slide1.jpg"
                        alt="First slide"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="images/banners/slide2.jpg"
                        alt="Second slide"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="images/banners/slide3.jpg"
                        alt="Third slide"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div
                className="card-banner overlay-gradient"
                style={{
                  minHeight: "230px",
                  backgroundImage: "url('../images/posts/2.jpg')",
                }}
              >
                <div className="card-img-overlay white">
                  <h3 className="card-title">
                    Photography is my hobby <br /> right now
                  </h3>
                  <p className="card-text" style={{ maxWidth: "400px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <a href="" className="btn btn-warning">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card-banner overlay-gradient"
                style={{
                  minHeight: "230px",
                  backgroundImage: "url('../images/posts/3.jpg')",
                }}
              >
                <div className="card-img-overlay text-white">
                  <h5 className="card-title">Best products</h5>
                  <p className="card-text">
                    No matter how far along you are in your sophistication as an
                    amateur astronomer, there is always one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-content padding-y-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-warning">
                      <i className="fa fa-money-bill-alt white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">Reasonable prices</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-secondary">
                      <i className="fa fa-comment-dots white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">Customer support 24/7 </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-success">
                      <i className="fa fa-truck white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">Quick delivery</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};
export default HomePage_Top;
