import React from 'react';
import '../styles/welcom.css';

import lamp from '../images/lamp.png'; 


function Welkom() {
  return (
    <div className="welkom-container">
      <div className="welkom">
      <img src={lamp} alt="lamp" />
      <h1 className='welkom'>
ЕЛЕКТРОТОВАРИ ТА НЕ ТІЛЬКИ... Ви не знайшли товар, що вас цікавить? Телефонуйте! Ми допоможемо вам.</h1>
      </div>
    </div>
  )
}

export default Welkom
