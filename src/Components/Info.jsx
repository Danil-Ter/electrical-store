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
              <p>Р067-940-75-84</p>
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
              <p>067-940-75-84</p>
            </div>
            <div className="Info__tel">
              <FaPhone
                size={20}
                color="orange"
                style={{ transform: "rotateY(180deg)" }}
              />
              <p>Р067-940-75-84</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Info__tel">
        <p>пошта:</p>
        <FaEnvelope size={20} color="orange" />
        <p>russev@ukr.net</p>
      </div>
      <div className="Info__tel">
        <p>адреса:</p>
        <FaMapMarkerAlt size={20} color="orange" />
        <p>Ринок "Староконний", вул. Раскидайлівська, 31.</p>
      </div>
    </div>
  );
}

export default Info;

