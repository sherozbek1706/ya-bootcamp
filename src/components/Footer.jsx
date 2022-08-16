import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="departament">
          <p className="logo white m">
            YANGI AVLOD <span className="logo_effect">BOOTCAMP</span>
          </p>
          <p className="dep-name">ALOQA</p>
          <p className="dep-info">+998938340617</p>
          <p className="dep-info">+998995555958</p>
          <p className="dep-info">yangiavlod12@gmail.com</p>
          <p className="dep-info">YANGI AVLOD - FRONTEND BOOTCAMP</p>
        </div>
        <div className="departament">
          <p className="dep-name pad">KURSLAR</p>
          <a href="#e">
            <p className="dep-info">FRONTEND BOOTCAMP</p>
          </a>
          <a href="#e">
            <p className="dep-info yess">FOUNDATION SPEED</p>
          </a>
          <a href="#e">
            <p className="dep-info">FOUNDATION</p>
          </a>
        </div>
      </div>
      <p className="foot-p">BARCHA HUQUQLAR HIMOYALANGAN. YANGI AVLOD SMS</p>
    </footer>
  );
};

export default Footer;
