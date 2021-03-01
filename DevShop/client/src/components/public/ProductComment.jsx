import React from "react";
const ProductComment = (props) => {
  return (
    <article className="box mb-3">
      <div className="icontext w-100">
        <div className="text">
          <span className="date text-muted float-md-right">{props.tarih}</span>
          <h6 className="mb-1">{props.isim}</h6>
          <ul className="rating-stars">
            <li
              style={{ width: `${props.yildiz * 20}%` }}
              className="stars-active"
            >
              <img src="../images/icons/stars-active.svg" alt="" />
            </li>
            <li>
              <img src="../images/icons/starts-disable.svg" alt="" />
            </li>
          </ul>
          <span className="label-rating text-warning">
            {props.yildiz < 3 ? "Zayıf" : "İyi"}
          </span>
        </div>
      </div>
      <div className="mt-3">
        <p>{props.icerik}</p>
      </div>
    </article>
  );
};
export default ProductComment;
