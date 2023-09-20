import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// product providers
import ProductProvider from './contexts/ProductContext';
// sidebar providers
import SidebarProvider from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SidebarProvider>
);
