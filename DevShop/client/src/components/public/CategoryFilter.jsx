import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const CategoryFilter = () => {
  const query = new URLSearchParams(useLocation().search); // url'de ?marka=... gibi degerleri alir
  const secim = query.get("secim") === null ? 1 : parseInt(query.get("secim"));
  const marka = query.get("marka") === null ? [] : query.get("marka");
  const min = query.get("min") === null ? 0 : parseInt(query.get("min"));
  const max = query.get("max") === null ? 0 : parseInt(query.get("max"));

  let defaultMarkalar = [];
  if (marka !== [] && marka.length > 0) {
    defaultMarkalar = marka.split(",");
  }

  const [secilenMarkalar, setSecilenMarkalar] = useState(defaultMarkalar);

  function markadaDegisiklik(event) {
    let secenekler = secilenMarkalar;
    let index = 0;

    if (event.target.checked) {
      secenekler.push(event.target.value);
    } else {
      index = secenekler.indexOf(event.target.value);
      secenekler.splice(index, 1);
    }
    console.log(secenekler);
    setSecilenMarkalar(secenekler);
  }

  const parametreler = useParams();

  function filtreyiUygula(event) {
    const adres =
      "http://localhost:3000/kategori/" +
      parametreler.kategori_url +
      "?sayfa=1&secim=" +
      secim +
      "&marka=" +
      secilenMarkalar +
      "&min=" +
      minFiyat +
      "&max=" +
      maxFiyat;

    window.location.href = adres;
    event.preventDefault();
  }

  const [minFiyat, setMinFiyat] = useState(min);
  const [maxFiyat, setMaxFiyat] = useState(max);

  function minDegisti(event) {
    setMinFiyat(event.target.value);
  }

  function maxDegisti(event) {
    setMaxFiyat(event.target.value);
  }

  const [veriTabanindakiMarkalar, setVTMarkalar] = useState([]);

  function markalariAl() {
    const adres =
      "http://localhost:5000/api/kategori/filtre/marka/" +
      parametreler.kategori_url;
    axios.get(adres).then(function (gelenVeri) {
      //console.log(gelenVeri.data);
      setVTMarkalar(gelenVeri.data);
    });
  }
  useEffect(markalariAl, []);

  return (
    <aside className="col-md-3">
      <form onSubmit={filtreyiUygula}>
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_1"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Product type</h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="card-body">
                <form className="pb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-light" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_2"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Markalar </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body">
                {veriTabanindakiMarkalar.map(function (marka) {
                  return (
                    <label className="custom-control custom-checkbox">
                      <input
                        defaultChecked={
                          secilenMarkalar.includes(marka) ? true : false
                        }
                        type="checkbox"
                        onChange={markadaDegisiklik}
                        value={marka}
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        {marka}
                        <b className="badge badge-pill badge-light float-right">
                          15
                        </b>{" "}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_3"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Price range </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="100"
                  name=""
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      onChange={minDegisti}
                      defaultValue={min}
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      onChange={maxDegisti}
                      defaultValue={max}
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Gonder
                </button>
              </div>
            </div>
          </article>
          {/* <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapse_4"
              aria-expanded="true"
              className=""
            >
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">Sizes </h6>
            </a>
          </header>
          <div className="filter-content collapse show" id="collapse_4">
            <div className="card-body">
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XS </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> SM </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> LG </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XXL </span>
              </label>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapse_5"
              aria-expanded="false"
              className=""
            >
              <i className="icon-control fa fa-chevron-down"></i>
              <h6 className="title">More filter </h6>
            </a>
          </header>
          <div className="filter-content collapse in" id="collapse_5">
            <div className="card-body">
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="myfilter_radio"
                  checked=""
                  className="custom-control-input"
                />
                <div className="custom-control-label">Any condition</div>
              </label>

              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="myfilter_radio"
                  className="custom-control-input"
                />
                <div className="custom-control-label">Brand new </div>
              </label>

              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="myfilter_radio"
                  className="custom-control-input"
                />
                <div className="custom-control-label">Used items</div>
              </label>

              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="myfilter_radio"
                  className="custom-control-input"
                />
                <div className="custom-control-label">Very old</div>
              </label>

            

            </div>
          </div>
        </article> */}
        </div>
      </form>
    </aside>
  );
};

export default CategoryFilter;
