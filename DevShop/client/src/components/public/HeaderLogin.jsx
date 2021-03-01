import React from "react";

const HeaderLogin = () => {
  return (
    <div>
      <div className="widget-header">
        <small className="title text-muted">Hoşgeldiniz !</small>
        <div>
          <a href="/girisyap">Giriş Yap</a>{" "}
          <span className="dark-transp"> | </span>
          <a href="/kayitol"> Kayıt Ol</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
