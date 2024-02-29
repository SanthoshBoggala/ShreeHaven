// ToastNotification.js
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const ToastNotification = ({ message, type }) => {
  const showToast = () => {
    toast[type](message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
        <button onClick={showToast()}>Show Toast</button>
        <ToastContainer /> 
    </>
  );
};

export default ToastNotification;
