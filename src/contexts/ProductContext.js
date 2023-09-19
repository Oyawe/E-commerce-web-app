import React, { createContext, useState, useEffect } from 'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);

  //fetch products
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
