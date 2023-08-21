import React from "react";

import company1 from "../images/company/askoukrem.png";
import company2 from "../images/company/hager.png";
import company3 from "../images/company/lebron.png";
import company4 from "../images/company/odessakabel.png";
import company5 from "../images/company/Schneider.png";
import company6 from "../images/company/chint.png";
import company7 from "../images/company/kopos.png";
import company8 from "../images/company/Lezard.png";
import company9 from "../images/company/videx.png";
import company10 from "../images/company/Zubr.png";
import company11 from "../images/company/eleks.png";
import company12 from "../images/company/zzcm.png";
import company13 from "../images/company/Bilmax.png";
import company14 from "../images/company/Nik.png";

import "../styles/home.css";

function Home() {
  return (
    <div className="Home">
      <div>
        <h1>
          Ласкаво просимо на сайт компанії <br />
          ТОВ ЕЛЕКТРО ЮГ
        </h1>
        <p>
          ТОВ ЕЛЕКТРО ЮГ - це перспективна компанія, яка реалізує різноманітне
          електрообладнання, займається його установкою та обслуговуванням
          протягом експлуатаційного періоду.
        </p>
        <p>
          Мета нашої компанії - не тільки продати клієнтові якісний товар, але й
          надати повний комплекс послуг з обстеження, проектування, монтажу,
          пусконалагоджувальних робіт, гарантійного та післягарантійного
          обслуговування і сервісної підтримки всіх елементів електричної
          системи.
        </p>
        <p>
          Компанія ТОВ ЕЛЕКТРО ЮГ займається створенням групових мереж,
          облаштуванням внутрішніх електричних мереж та організацією точного
          обліку споживаної електроенергії в приміщеннях різного призначення.
        </p>
        <p>
          Комплексний підхід до монтажу електричних систем - гарантія їх
          безперебійної роботи!
        </p>
        <p>
          В асортименті компанії високоякісна продукція вітчизняних та
          зарубіжних виробників.
        </p>
        <h2 className="Home__title">Партнеры</h2>
        <div className="Home__company">
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
          <img src={company5} alt="Company 5" />
          <img src={company6} alt="Company 6" />
          <img src={company7} alt="Company 7" />
          <img src={company8} alt="Company 8" />
          <img src={company10} alt="Company 10" />
          <img src={company9} alt="Company 9" />
          <img src={company11} alt="Company 11" />
          <img src={company12} alt="Company 12" />
          <img src={company13} alt="Company 13" />
          <img src={company14} alt="Company 14" />
        </div>
      </div>
    </div>
  );
}

export default Home;
