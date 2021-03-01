import React from "react";

const HeaderSearch = () => {
  return (
    <div>
      <form action="#" className="search">
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control"
            style={{ width: "60%" }}
            placeholder="Ürün ismi giriniz"
          />
          <div className="input-group-append">
            <button className="btn btn-info" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeaderSearch;
