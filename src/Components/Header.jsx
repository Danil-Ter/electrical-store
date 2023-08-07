import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <p>ТОВ Електро Південь</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Головна</NavLink>
            </li>
            <li>
              <NavLink to="/products">продукція</NavLink>
            </li>
            <li>
              <NavLink to="/services">послуги</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">контакти</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

