import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import Signup from './landing-page/signup/Signup';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/ProductsPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';
import Footer from './landing-page/Footer';
import Navbar from './landing-page/Navbar';
import NotFound from './landing-page/NotFound';
import Login from './landing-page/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);