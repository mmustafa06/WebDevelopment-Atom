import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function YaziAlani(props) {
  const tema = useSelector((state) => state.tema);

  return (
    <div className={`card mb-3 ${tema}`}>
      <div className="card-header">
        <Link to={`/yazi/${props.id}`}>
          <h5
            className={`card-title ${
              tema === "bg-light" ? "text-dark" : "text-light"
            }`}
          >
            {props.baslik}
          </h5>
        </Link>
      </div>
      <div className="card-body">
        <p
          className={`card-text ${
            tema === "bg-light" ? "text-dark" : "text-muted"
          }`}
        >
          {props.icerik}
        </p>
      </div>
    </div>
  );
}
export default YaziAlani;
