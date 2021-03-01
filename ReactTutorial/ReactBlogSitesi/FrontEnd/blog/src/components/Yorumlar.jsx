import React, { useState, useEffect } from "react";
import axios from "axios";
import YaziSayfasi from "./YaziSayfasi";

function Yorumlar() {
  const [yorumlar, setYorumlar] = useState([]);

  function yorumlariAl() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(function (gelenVeriler) {
        setYorumlar(gelenVeriler.data);
      });
  }
  useEffect(yorumlariAl, []);

  return (
    <div className="border-light p-2 rounded">
      <h4>Yorumlar</h4>
      {yorumlar.map(function (yorum) {
        return (
          <div className="yorum rounded mb-2">
            <div>
              <b>{yorum.name}</b>
            </div>
            <div className="pt-2 pb-2">{yorum.body}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Yorumlar;
