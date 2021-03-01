import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import YaziAlani from "./YaziAlani.jsx";
import Populer from "./Populer.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import Yorumlar from "./Yorumlar.jsx";
function YaziSayfasi() {
  const parametreler = useParams();

  const [yazilar, setYazilar] = useState([]);
  function yazilariAl() {
    axios
      .get("http://localhost:3000/api/yazi" + parametreler.id + ".json")
      .then(function (gelenVeriler) {
        setYazilar(gelenVeriler.data);
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
              <Yorumlar />
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
export default YaziSayfasi;
