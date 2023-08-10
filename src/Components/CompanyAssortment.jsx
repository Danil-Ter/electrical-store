import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../Components/companyData';
import "../styles/companyAssortment.css";

function CompanyAssortment() {
  const { companyName } = useParams();

  const company = ItemList.find(item => item.name.toLowerCase() === companyName);

  if (!company) {
    return <div>Компания не найдена.</div>;
  }

  return (
    <div className='company-assortment'>
      <h2>{company.name}</h2>
      <h3>Ассортимент:</h3>
      <div className='company-cards'>
        {company.assortment.map(product => (
          <div key={product.id} className='company-card'>
            <img src={product.image} alt={product.name} className='company-image' />
            <p className='company-name'>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyAssortment;




