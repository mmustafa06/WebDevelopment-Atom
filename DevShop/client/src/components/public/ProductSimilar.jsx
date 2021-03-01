import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const ProductSimilar = (props) => {
  const [benzer, setBenzer] = useState([]);

  function benzerAl() {
    if (props.kategori_url !== undefined) {
      axios
        .get(
          "http://localhost:5000/api/urun/benzerurunler/" +
            props.kategori_url +
            "/" +
            props.id
        )
        .then(function (gelenVeri) {
          setBenzer(gelenVeri.data);
        });
    }
  }

  useEffect(benzerAl, [props.kategori_url !== undefined]);

  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Benzer Ürünler</h3>
        </header>
        <div className="row">
          {benzer.map(function (urun) {
            return (
              <ProductCard
                key={urun.id}
                id={urun.id}
                isim={urun.isim}
                resim={urun.resimler.bir}
                puan={urun.yildiz.puan}
                yildizsayisi={urun.yildiz.sayi}
                ind_fiyat={urun.ind_fiyat}
                normal_fiyat={urun.normal_fiyat}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductSimilar;
