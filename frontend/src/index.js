import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { UserContextProvider } from './contexts/userContext';
import { TypesCatesContextProvider } from './contexts/TypesCatesContext';
import LimitContextProvider from './contexts/LimitContext';
import ProductContextProvider from './contexts/ProductContext';
import { RefetchProductContextProvider } from './contexts/RefetchProductContext';
import SelectedFiltersProvider from './contexts/SelectedFilters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <TypesCatesContextProvider>
  <LimitContextProvider>
  <ProductContextProvider>
  <SelectedFiltersProvider>
  <RefetchProductContextProvider>
      <App />
  </RefetchProductContextProvider>
  </SelectedFiltersProvider>
  </ProductContextProvider>
  </LimitContextProvider>
  </TypesCatesContextProvider>
  </UserContextProvider>
);
