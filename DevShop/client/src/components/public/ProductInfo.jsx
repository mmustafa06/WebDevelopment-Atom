import React from "react";

const ProductInfo = (props) => {
  return (
    <section class="section-pagetop bg">
      <div class="container">
        <nav>
          <ol class="breadcrumb text-white">
            <li class="breadcrumb-item">
              <a href="#">Anasayfa</a>
            </li>
            <li class="breadcrumb-item">
              <a href={`/kategori/${props.kategori_url}`}>
                {props.kategori_isim}
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {props.isim}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default ProductInfo;
