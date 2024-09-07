import React, { useContext, useEffect, useState } from 'react';
import logo from "../../../public/Logo (2).png"
import avatar from "../../../public/avatar.png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { CartContext } from '../../providers/CartProvider';
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const {cartItems} = useContext(CartContext)
  const [totalItems,setTotalItems] = useState()

  useEffect(()=>{
    setTotalItems(cartItems.length)
  },[cartItems])


  // nav links
  const navigate = useNavigate();
    const navLinks = 
    <>
    <Link to="/"><li>Home</li></Link>
    <Link to="/products"><li>Products</li></Link>
    <Link to="/categories"><li>Categories</li></Link>
    <Link to="/custom"><li>Custom</li></Link>
    <Link to="/blog"><li>Blog</li></Link>
    </>

    //logout 
    const handleLogOut = ()=>{
      logOut();
      navigate("/login")
    }
    return (
        <div className="navbar bg-base-100 lg:py-10 container mx-auto  border-b border-b-[#ECECEC] mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-barlow text-lg font-medium text-[#202020] gap-5">
        {navLinks}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-barlow text-lg font-medium text-[#202020] gap-5">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Link to="/cart" className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item bottom-0">{totalItems}</span>
        </Link>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={avatar} />
        </div>
      </div>
      {/* logout button */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <p className='my-3'>Email: <span className='text-blue-400'>{user?.email}</span></p>
        <button
        onClick={handleLogOut}
        className='btn'>Logout</button>
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;