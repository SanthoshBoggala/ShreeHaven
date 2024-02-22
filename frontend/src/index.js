import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { UserContextProvider } from './contexts/userContext';
import { TypesCatesContextProvider } from './contexts/TypesCatesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <TypesCatesContextProvider>
      <App />
  </TypesCatesContextProvider>
  </UserContextProvider>
);
