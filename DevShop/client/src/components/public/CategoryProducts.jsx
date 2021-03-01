import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const CategoryProducts = () => {
  const parametreler = useParams(); // url'de :id gibi degerleri alir
  const query = new URLSearchParams(useLocation().search); // url'de ?urun=... gibi degerleri alir
  const marka = query.get("marka") === null ? [] : query.get("marka");
  const min = query.get("min") === null ? 0 : parseInt(query.get("min"));
  const max = query.get("max") === null ? 0 : parseInt(query.get("max"));
  const [urunler, setUrunler] = useState([]);
  const [urunSayisi, setUrunSayisi] = useState(0);
  const bulunduguSayfa =
    query.get("sayfa") === null ? 1 : parseInt(query.get("sayfa"));

  const sayfadaGosterilenSayi = 4; // Saydaki urun adedi

  const secim = query.get("secim") === null ? "1" : query.get("secim");
  var yazanFiltre = "Yeni ürünler";
  if (secim === "2") {
    yazanFiltre = "Çok satanlar";
  } else if (secim === "3") {
    yazanFiltre = "En düşük fiyat";
  }

  function urunSayisiAl() {
    var adres =
      "http://localhost:5000/api/urunsayisi/" +
      parametreler.kategori_url +
      "?marka=" +
      marka +
      "&min=" +
      min +
      "&max=" +
      max;
    axios.get(adres).then(function (gelenVeri) {
      //console.log(gelenVeri.data.toplam);
      setUrunSayisi(gelenVeri.data.toplam);
    });
  }

  function urunleriAl() {
    var adres =
      "http://localhost:5000/api/kategori/" +
      parametreler.kategori_url +
      "/" +
      query.get("sayfa") +
      "?secim=" +
      secim +
      "&marka=" +
      marka +
      "&min=" +
      min +
      "&max=" +
      max;
    axios.get(adres).then(function (gelenVeri) {
      setUrunler(gelenVeri.data);
    });
  }

  function filtreSecim(event) {
    var adres = "";

    if (event.target.value === "Yeni ürünler") {
      adres =
        "http://localhost:3000/kategori/" +
        parametreler.kategori_url +
        "?sayfa=" +
        bulunduguSayfa +
        "&secim=1&marka=" +
        marka +
        "&min=" +
        min +
        "&max=" +
        max;
    } else if (event.target.value === "Çok satanlar") {
      adres =
        "http://localhost:3000/kategori/" +
        parametreler.kategori_url +
        "?sayfa=" +
        bulunduguSayfa +
        "&secim=2&marka=" +
        marka +
        "&min=" +
        min +
        "&max=" +
        max;
    } else if (event.target.value === "En düşük fiyat") {
      adres =
        "http://localhost:3000/kategori/" +
        parametreler.kategori_url +
        "?sayfa=" +
        bulunduguSayfa +
        "&secim=3&marka=" +
        marka +
        "&min=" +
        min +
        "&max=" +
        max;
    }
    window.location.href = adres;
  }

  useEffect(urunSayisiAl, []);
  useEffect(urunleriAl, []);

  return (
    <main className="col-md-9">
      <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
          <span className="mr-md-auto">{urunSayisi} tane ürün bulundu </span>

          <select
            defaultValue={yazanFiltre}
            onChange={filtreSecim}
            className="mr-2 form-control"
          >
            <option>Yeni ürünler</option>
            <option>Çok satanlar</option>
            <option>En düşük fiyat</option>
          </select>

          <div className="btn-group">
            <a
              href="#"
              className="btn btn-outline-secondary"
              data-toggle="tooltip"
              title=""
              data-original-title="List view"
            >
              <i className="fa fa-bars"></i>
            </a>
            <a
              href="#"
              className="btn  btn-outline-secondary active"
              data-toggle="tooltip"
              title=""
              data-original-title="Grid view"
            >
              <i className="fa fa-th"></i>
            </a>
          </div>
        </div>
      </header>
      <div className="row">
        {urunler.map(function (urun) {
          return (
            <ProductCard
              key={urun._id}
              id={urun._id}
              isim={urun.isim}
              yildizsayisi={urun.yildiz.sayi}
              puan={urun.yildiz.puan}
              ind_fiyat={urun.ind_fiyat}
              normal_fiyat={urun.normal_fiyat}
              resim={urun.resimler.bir}
            />
          );
        })}
      </div>

      <nav className="mt-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href={`?sayfa=1&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
            >
              İlk sayfa
            </a>
          </li>

          {bulunduguSayfa === 1 && (
            <React.StrictMode>
              <li className="page-item active">
                <a
                  className="page-link"
                  href={`?sayfa=1&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                >
                  1
                </a>
              </li>
              {urunSayisi / sayfadaGosterilenSayi > 1 && ( // Birinci sayfaya sigmiyorsa
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`?sayfa=2&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                  >
                    2
                  </a>
                </li>
              )}
              {urunSayisi / sayfadaGosterilenSayi > 2 && ( // Ikinci sayfaya sigmiyorsa
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`?sayfa=3&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                  >
                    3
                  </a>
                </li>
              )}
            </React.StrictMode>
          )}
          {bulunduguSayfa !== 1 && (
            <React.StrictMode>
              <li className="page-item">
                <a
                  className="page-link"
                  href={`?sayfa=${
                    bulunduguSayfa - 1
                  }&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                >
                  {bulunduguSayfa - 1}
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link"
                  href={`?sayfa=${bulunduguSayfa}&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                >
                  {bulunduguSayfa}
                </a>
              </li>
              {urunSayisi / sayfadaGosterilenSayi > bulunduguSayfa && (
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`?sayfa=${
                      bulunduguSayfa + 1
                    }&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
                  >
                    {bulunduguSayfa + 1}
                  </a>
                </li>
              )}
            </React.StrictMode>
          )}

          <li className="page-item">
            <a
              className="page-link"
              href={`?sayfa=${
                parseInt(urunSayisi / sayfadaGosterilenSayi) + 1
              }&secim=${secim}&marka=${marka}&min=${min}&max=${max}`}
            >
              Son Sayfa
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default CategoryProducts;

{
  /* <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src="/images/items/1.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Great item name goes here
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                  <del className="price-old">$1980</del>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/2.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/3.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/4.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/5.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/6.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/7.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src="/images/items/1.jpg" />
              <a className="btn-overlay" href="#">
                <i className="fa fa-search-plus"></i> Quick view
              </a>
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  Product name goes here just for demo item
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$1280</span>
                </div>
              </div>
              <a href="#" className="btn btn-block btn-primary">
                Add to cart{" "}
              </a>
            </figcaption>
          </figure>
        </div> */
}
