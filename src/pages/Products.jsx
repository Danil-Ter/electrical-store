import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../Components/CompanyList'; 
import "../styles/product.css";

function Products() {
  return (
    <div className='products'>
      <h1 className='products-title'>Продукція</h1>
      <div className='products-cards-container'> 
        {ItemList.map((item, index) => (
          <Link to={`/products/${item.name.toLowerCase()}`} key={index} className='products-card'>
            <img src={item.image} alt={item.name} className='products-image' />
            <p className='products-name'>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;


