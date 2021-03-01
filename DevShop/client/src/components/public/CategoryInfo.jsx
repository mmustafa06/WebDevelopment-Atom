import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryInfo = () => {
  const [kategoriIsim, setKategoriIsim] = useState("");
  const [kategoriAciklama, setKategoriAciklama] = useState("");

  const parametreler = useParams();

  function kategoriGetir() {
    const adres =
      "http://localhost:5000/api/kategori_bireysel/" +
      parametreler.kategori_url;
    axios.get(adres).then(function (kategori) {
      //console.log(kategori.data[0].kategori_aciklama);
      setKategoriIsim(kategori.data[0].kategori_adi);
      setKategoriAciklama(kategori.data[0].kategori_aciklama);
    });
  }

  useEffect(kategoriGetir, []);

  return (
    <section className="section-pagetop bg">
      <div className="container">
        <h2 className="title-page">{kategoriIsim} kategorisi urunleri</h2>
        <nav>
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="#">Anasayfa</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {kategoriIsim}
            </li>
          </ol>
          <small className="pt-3 text-muted">{kategoriAciklama}</small>
        </nav>
      </div>
    </section>
  );
};

export default CategoryInfo;
