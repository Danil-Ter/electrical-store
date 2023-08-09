import React from "react";
import "../styles/info.css";

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Info() {
  return (
    <div className="Info">
      <h1 className="Info__title">Контактна інформація:</h1>
      <div className="Info__box">
        <div className="Info__box">
          <p>Микола:</p>
          <div>
            <div className="Info__tel">
              <FaPhone
                size={20}
                color="orange"
                style={{ transform: "rotateY(180deg)" }}
              />
              <p>067-940-75-84</p>
            </div>
            <div className="Info__tel">
              <FaPhone
                size={20}
                color="orange"
                style={{ transform: "rotateY(180deg)" }}
              />
              <p>048-787-94-50</p>
            </div>
          </div>
        </div>
        <div className="Info__box">
          <p>Сергій:</p>
          <div>
            <div className="Info__tel">
              <FaPhone
                size={20}
                color="orange"
                style={{ transform: "rotateY(180deg)" }}
              />
              <p>097-439-67-57</p>
            </div>
            <div className="Info__tel">
              <FaPhone
                size={20}
                color="orange"
                style={{ transform: "rotateY(180deg)" }}
              />
              <p>048-787-27-56</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Info__adres">
        <p>пошта:</p>
        <div className="Info__adres-box">
        <FaEnvelope size={20} color="orange" />
        <p>russev@ukr.net</p>
        </div>
      </div>
      <div className="Info__adres">
        <p>адреса:</p>
        <div className="Info__adres-box">
        <FaMapMarkerAlt size={23} color="orange" />
        <p>Ринок "Старокінний", вул. Раскидайлівська, 31.</p>
        </div>
      </div>
    </div>
  );
}

export default Info;

