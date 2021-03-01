import axios from "axios";
import React, { useEffect, useState } from "react";

const HeaderMenu = () => {
  const [kategori, setKategori] = useState([]);

  function kategorileriAl() {
    axios
      .get("http://localhost:5000/api/kategori_header")
      .then(function (gelenVeri) {
        //console.log(gelenVeri.data);
        setKategori(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link pl-0" href="#">
            {" "}
            <strong>All category</strong>
          </a>
        </li>

        {kategori.map(function (gelen) {
          return (
            <li className="nav-item">
              <a className="nav-link" href={`/kategori/${gelen.kategori_url}`}>
                {gelen.kategori_adi}
              </a>
            </li>
          );
        })}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="http://example.com"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Foods and Drink
            </a>
            <a className="dropdown-item" href="#">
              Home interior
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Category 1
            </a>
            <a className="dropdown-item" href="#">
              Category 2
            </a>
            <a className="dropdown-item" href="#">
              Category 3
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
