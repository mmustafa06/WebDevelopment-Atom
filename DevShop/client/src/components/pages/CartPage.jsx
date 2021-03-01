import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
const CartPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <aside className="col-lg-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" className="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside">
                            <img
                              src="/images/items/11.jpg"
                              className="img-sm"
                              alt=""
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title text-dark">
                              Camera Canon EOS M50 Kit
                            </a>
                            <p className="text-muted small">
                              Matrix: 25 Mpx <br /> Brand: Canon
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$1156.00</var>
                          <small className="text-muted"> $315.20 each </small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          className="btn btn-light"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                        <a href="" className="btn btn-light">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside">
                            <img
                              src="/images/items/10.jpg"
                              className="img-sm"
                              alt=""
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title text-dark">
                              ADATA Premier ONE microSDXC
                            </a>
                            <p className="text-muted small">
                              Size: 256 GB <br /> Brand: ADATA{" "}
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$149.97</var>
                          <small className="text-muted"> $75.00 each </small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          className="btn btn-light"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                        <a href="" className="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="card-body border-top">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                </div>
              </div>
            </aside>
            <aside className="col-lg-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">$69.97</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right text-danger">- $10.00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right text-dark b">
                      <strong>$59.97</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="/images/misc/payments.png" height="26" alt="" />
                  </p>
                  <a href="#" className="btn btn-primary btn-block">
                    {" "}
                    Make Purchase{" "}
                  </a>
                  <a href="/" className="btn btn-light btn-block">
                    Continue Shopping
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};
export default CartPage;
