import React, { useContext } from 'react';
// import link 
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  console.log(product)
  // destructure product
  const { id, image, category, title, price } = product
  return <div>Product</div>;
};

export default Product;
