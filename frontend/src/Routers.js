import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SingleProductPage from './SingleProductPage/SingleProductPage';
import CartPage from './CartPage/CartPage';
import ProductPage from './ProductsPage/ProductsPage';
import ProfilePage from './ProfilePage/ProfilePage';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ContactPage from './ContactPage/ContactPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import MyOrdersPage from './MyOrdersPage/MyOrdersPage';
import UploadProductPage from './UploadProductPage/UploadProductPage';

const Routers = () => {
  return ( 
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/my/cart" element={<CartPage />} />
        <Route path="/my/profile" element={<ProfilePage />} />
        <Route path="/my/orders" element={<MyOrdersPage />} />
        <Route path="/my/reviews" element={<ProfilePage />} />
        <Route path="/my/upload_product" element={<UploadProductPage />} />
    </Routes>
  );
};

export default Routers;
