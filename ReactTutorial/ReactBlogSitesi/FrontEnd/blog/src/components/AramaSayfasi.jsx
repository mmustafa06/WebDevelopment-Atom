import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import YaziAlani from "./YaziAlani.jsx";
import Populer from "./Populer.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AramaSayfasi() {
  const [yazilar, setYazilar] = useState([]);

  //http://localhost:3000/arama?ifade=misafir url'sinde input'ta name="ifade" olarak adlandirdigimiz ifade'nin degerini alir
  const query = new URLSearchParams(useLocation().search);
  const arananKelime = query.get("ifade");

  function yazilariAl() {
    axios
      .get("http://localhost:3000/api/yazilar.json")
      .then(function (gelenVeriler) {
        const bosArray = gelenVeriler.data.filter(function (veri) {
          return (
            veri.baslik
              .toLowerCase()
              .includes(arananKelime.toLocaleLowerCase()) ||
            veri.aciklama
              .toLocaleLowerCase()
              .includes(arananKelime.toLowerCase())
          );
        });
        setYazilar(bosArray);
      });
  }
  useEffect(yazilariAl, []);
  return (
    <div>
      <Header />
      <section id="ana-icerik">
        <div className="container bg-white shadow-sm rounded">
          <div className="row pt-3 mt-2 pb-2 mb-2">
            <div className="col-lg-9 col-md-9 col-sm-12">
              {yazilar.map(function (yazi) {
                return (
                  <YaziAlani
                    id={yazi.id}
                    key={yazi.id}
                    baslik={yazi.baslik}
                    icerik={yazi.aciklama}
                  />
                );
              })}
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Populer />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default AramaSayfasi;
