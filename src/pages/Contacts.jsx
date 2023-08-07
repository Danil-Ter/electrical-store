import React from 'react'
import Info from '../Components/Info';
import Cart from '../Components/Cart';
import FormComponent from '../Components/FormComponent';
import "../styles/contact.css";

function contacts() {
  return (
    <div className='Contacts'>
      <Info />
      <Cart />
      <FormComponent />
    </div>
  )
}

export default contacts