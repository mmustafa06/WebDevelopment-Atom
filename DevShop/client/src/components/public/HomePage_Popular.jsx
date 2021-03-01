import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const HomePage_Popular = () => {
  const [urunler, setUrunler] = useState([]);

  function urunleriAl() {
    axios
      .get("http://localhost:5000/api/populerurunler")
      .then(function (gelenVeri) {
        setUrunler(gelenVeri.data);
      });
  }
  useEffect(urunleriAl, []);

  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Populer Ürünler</h3>
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
      </div>
    </section>
  );
};
export default HomePage_Popular;
