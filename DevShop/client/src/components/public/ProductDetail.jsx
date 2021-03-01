import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo.jsx";
import ProductSimilar from "./ProductSimilar.jsx";
import axios from "axios";

const ProductDetail = () => {
  const [detay, setDetay] = useState({
    resimler: {
      bir: "",
      iki: "",
      uc: "",
      dort: "",
    },
    stok: {
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
    },
    yildiz: {
      sayi: 0,
      puan: "0",
    },
    parametreler: {
      taksit: "",
      garanti: "",
      kargo: "",
    },
  });
  const parametreler = useParams();
  function verileriAl() {
    axios
      .get("http://localhost:5000/api/urun/detay/" + parametreler.id)
      .then(function (gelenVeriler) {
        setDetay(gelenVeriler.data[0]);
      });
  }
  useEffect(verileriAl, []);
  return (
    <React.StrictMode>
      <ProductInfo
        isim={detay.isim}
        kategori_isim={detay.kategori}
        kategori_url={detay.kategori_url}
      />
      <section className="section-content padding-y">
        <div className="container">
          <div className="card">
            <div className="row no-gutters">
              <aside className="col-md-6">
                <ProductImages resimler={detay.resimler} />
              </aside>
              <main className="col-md-6 border-left">
                <article className="content-body">
                  <h2 className="title">{detay.isim}</h2>
                  <div className="rating-wrap my-3">
                    <ul className="rating-stars">
                      <li
                        style={{ width: `${detay.yildiz.puan * 20}%` }}
                        className="stars-active"
                      >
                        <img src="/images/icons/stars-active.svg" alt="" />
                      </li>
                      <li>
                        <img src="/images/icons/starts-disable.svg" alt="" />
                      </li>
                    </ul>
                    <small className="label-rating text-muted">
                      {detay.yildiz.sayi}
                    </small>
                  </div>
                  <div className="mb-3">
                    <var className="price h4">₺{detay.ind_fiyat}</var>
                    <del className="text-muted">₺{detay.normal_fiyat}</del>
                  </div>
                  <p>{detay.aciklama}</p>
                  <dl className="row">
                    <dt className="col-sm-3">Marka</dt>
                    <dd className="col-sm-9">{detay.marka}</dd>
                    <dt className="col-sm-3">Renk</dt>
                    <dd className="col-sm-9">{detay.renk}</dd>
                    <dt className="col-sm-3">Cinsiyet</dt>
                    <dd className="col-sm-9">{detay.cinsiyet}</dd>
                  </dl>
                  <hr />
                  <div className="row">
                    <div className="form-group col-md flex-grow-0">
                      <label>Miktar</label>
                      <div className="input-group mb-3 input-spinner">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-light"
                            type="button"
                            id="button-plus"
                          >
                            +
                          </button>
                        </div>
                        <input type="text" className="form-control" value="1" />
                        <div className="input-group-append">
                          <button
                            className="btn btn-light"
                            type="button"
                            id="button-minus"
                          >
                            −
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md">
                      <label>Beden Seçin</label>
                      <div className="mt-2">
                        <label className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            checked=""
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">S</div>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">M</div>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">L</div>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">XL</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn  btn-primary">
                    Hemen Satın Al
                  </a>
                  <a href="#" className="btn  btn-outline-primary ml-2">
                    <span className="text">Sepete Ekle</span>{" "}
                    <i className="fas fa-shopping-cart"></i>{" "}
                  </a>
                </article>
              </main>
            </div>
          </div>
        </div>
      </section>
      <ProductSimilar kategori_url={detay.kategori_url} id={parametreler.id} />
    </React.StrictMode>
  );
};
export default ProductDetail;
