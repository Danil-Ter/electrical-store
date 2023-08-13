import React from "react";
import "../styles/footer.css";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div>
          <p className="footer__logo">ТОВ ЕЛЕКТРО ЮГ</p>
        </div>
        <div>
          <div className="footer__info">
            <FaPhone
              size={20}
              color="orange"
              style={{ transform: "rotateY(180deg)" }}
            />
            <p>067-940-75-84</p>
          </div>
          <div className="footer__info">
            <FaPhone
              size={20}
              color="orange"
              style={{ transform: "rotateY(180deg)" }}
            />
            <p>097-439-67-57</p>
          </div>
        </div>
        <div>
          <div className="footer__info footer__info-adres">
            <FaMapMarkerAlt size={20} color="orange" />
            <p>Ринок "Старокінний", вул. Раскидайлівська, 31.</p>
          </div>
          <div className="footer__info">
            <FaEnvelope size={20} color="orange" />
            <p>russev@ukr.net</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
