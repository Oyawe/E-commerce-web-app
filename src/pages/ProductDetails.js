import React, { useContext } from 'react';
//import useParams
import { useParams } from 'react-router-dom';
//import cartcontext 
import { CartContext } from '../contexts/CartContext';
//import productcontext
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get the product id from the url
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)


  //get the single product based on the id
  const product = products.find(item => {
    return item.id === parseInt(id);
  })
  //if product is not found
  if (!product) {
    return <section className='flex items-center justify-center h-screen '>
      Loading...
    </section>
  }
  // descturture the product
  const { title, price, description, image } = product;

  return <section className='flex items-center h-screen pt-32 pb-12 lg:py-32'>
    <div className="container mx-auto">
      {/* image & text wrapper  */}
      <div className='flex flex-col items-center lg:flex-row'>
        {/* image  */}
        <div className='flex items-center justify-center flex-1 mb-8 lg:mb-0 '>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
        </div>
        {/* Text  */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w[450px] mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-[#1861b6] font-medium mb-6'>
            $ {price}
          </div>
          <p className='mb-8'>{description}</p>
          <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white rounded-xl hover:bg-[#1861b6] transition ease-out'>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
