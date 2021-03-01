import React from "react";
const ProductCard = (props) => {
  return (
    <div className="col-md-3">
      <a href={`/urun/${props.id}`} className="card card-product-grid">
        <div className="img-wrap">
          <img src={props.resim} />
        </div>
        <div className="info-wrap text-center ">
          <p className="title text-truncate">{props.isim}</p>
          <ul className="rating-stars">
            <li
              style={{ width: `${props.puan * 20}%` }}
              className="stars-active"
            >
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <small className="text-muted">{props.yildizsayisi}</small>
          <div className="price-wrap mt-2 text-center">
            <span className="price">₺{props.ind_fiyat}</span>
            <del className="price-old">₺{props.normal_fiyat}</del>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ProductCard;
