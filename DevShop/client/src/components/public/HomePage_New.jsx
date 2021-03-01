import axios from "axios";
import React, { useState, useEffect } from "react";
import PopularCard from "./ProductCard";
const HomePage_New = () => {
  const [yeniUrun, setYeniUrun] = useState([]);

  function urunleriGetir() {
    axios
      .get("http://localhost:5000/api/yeniurunler")
      .then(function (gelenVeriler) {
        setYeniUrun(gelenVeriler.data);
      });
  }

  useEffect(urunleriGetir, []);

  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Yeni Ürünler</h3>
        </header>
        <div className="row">
          {yeniUrun.map(function (urun) {
            return (
              <PopularCard
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
      </div>
    </section>
  );
};
export default HomePage_New;
