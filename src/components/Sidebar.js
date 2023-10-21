import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom'
//import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
//import components
import CartItem from '../components/CartItem'
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext)
  // console.log(useContext(CartContext));

  return <div className={` ${isOpen ? 'right-0' : '-right-full'} w-[80vw] bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-10 px-4 lg:px-[35px] overflow-scroll`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='text-sm font-semibold uppercase'>Shopping Bag ({itemAmount})</div>
      {/* icon  */}
      <div onClick={handleClose} className='flex items-center justify-center w-8 h-8 cursor-pointer'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>{cart.map((item) => {
      return <CartItem item={item} key={item.id} />
    })}</div>
    <div className='flex flex-col py-4 mt-4 gap-y-3'>
      <div className='flex items-center justify-between w-full'>
        <div></div>
        {/* total */}
        <div className='font-semibold uppercase'>
          <span className='mr-2'>Total:</span>% ${parseFloat(totalPrice).toFixed(2)}
        </div>
        {/* clear cart icon  */}
        <div onClick={clearCart} className='cursor-pointer py-4 bg-[#1861b6] text-white w-12  h-12  flex justify-center items-center text-xl rounded-md
        '>
          <FiTrash2 />
        </div>
      </div>
      <Link to={`/`} className='flex items-center justify-center w-full p-4 font-medium bg-gray-200 rounded-md text-primary'>View Cart</Link>
      <Link to={`/`} className='flex items-center justify-center w-full p-4 font-medium text-white rounded-md bg-primary'>Checkout</Link>
    </div>
  </div>;
};

export default Sidebar;
