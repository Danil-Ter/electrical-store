import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes , FaPhone} from "react-icons/fa";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-container">
          <p>ТОВ ЕЛЕКТРО ЮГ</p>
          <div className="burger-menu" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="burger-icon" />
            ) : (
              <FaBars className="burger-icon" />
            )}
          </div>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="header__tel">
            <FaPhone
              size={20}
              color="orange"
              style={{ transform: "rotateY(180deg)" }}
            />
            <p>
              <a href="tel:0679407584">067-940-75-84</a>
            </p>
          </div>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={toggleMenu}>
                продукція
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={toggleMenu}>
                послуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" onClick={toggleMenu}>
                контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
