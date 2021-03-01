import React, { useEffect, useState } from "react";
import axios from "axios";

function Populer() {
  const [baslik, setBaslik] = useState([]);

  function basliklariGetir() {
    axios
      .get("http://localhost:3000/api/yazilar.json")
      .then(function (gelenVeriler) {
        setBaslik(gelenVeriler.data);
      });
  }
  useEffect(basliklariGetir, []);

  return (
    <div>
      <h3 className="text-white bg-success p-2 rounded">Populer Yazilar</h3>
      <ul class="list-group">
        {baslik.map(function (veri, index) {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {veri.baslik}
              <span class="badge bg-primary rounded-pill">{index + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Populer;
