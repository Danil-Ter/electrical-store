import React, { useState } from 'react';
import '../styles/formStyles.css'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
    
    }
  };

  return (
    <div className='FormComponent'>
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше ім'я"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш телефон"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш email"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Напишіть ваше повідомлення"
          required
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
    </div>
  );
};

export default FormComponent;
