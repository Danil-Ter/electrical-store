import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Welkom from './Components/Welkom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import CompanyAssortment from './Components/CompanyAssortment';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Welkom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products/:companyName" element={<CompanyAssortment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

