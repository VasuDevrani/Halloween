import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const index = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <p className="footer__logo">
            <img src="./img/logo.png" alt="" className="footer__logo" />
            Halloween
          </p>
          <p className="footer__description">
            Enjoy the scariest night <br /> of your life.
          </p>
          <div className="footer__social">
            <a
              href="https://github.com/SouvikChan"
              className="footer__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/my_name_is_sc_"
              className="footer__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About</h3>
          <ul className="footer__links">
            <li>
              <p className="footer__link">About Us</p>
            </li>
            <li>
              <p className="footer__link">Features</p>
            </li>
            <li>
              <p className="footer__link">News</p>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Company</h3>
          <ul className="footer__links">
            <li>
              <p className="footer__link">Blog</p>
            </li>
            <li>
              <p className="footer__link">About us</p>
            </li>
            <li>
              <p className="footer__link">Our mission</p>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Services</h3>
          <ul className="footer__links">
            <li>
              <p className="footer__link">Pricing</p>
            </li>
            <li>
              <p className="footer__link">Discounts</p>
            </li>
            <li>
              <p className="footer__link">Shipping Mode</p>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169; Halloween. ALL Rights Reserved
      </span>
      <img src="./img/footer1-img.png" alt="" className="footer__img-one" style={{marginRight:70}} />
      <img src="./img/footer2-img.png" alt="" className="footer__img-one" style={{marginRight:60}} />
    </footer>
  );
};

export default index;
