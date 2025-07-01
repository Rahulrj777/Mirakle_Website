// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector(state => state.cart);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-150 shadow-md">
      {/* Top Section: Logo + Search + Icons */}
      <div className="bg-white px-4 py-3 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo only */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-25 h-15 object-contain" />
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-[24px]">
          <Link to="/login_signup">
            <FaRegUser className="text-black" />
          </Link>
          <Link to="/AddToCart" className="relative">
            <HiOutlineShoppingBag className="text-black" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Bottom Nav Bar (Green background) */}
      <nav className="bg-green-600">
        <ul className="max-w-7xl mx-auto px-4 py-2 flex justify-center gap-6 font-semibold text-white text-lg">
          {[
            { path: '/', list: 'Home' },
            { path: '/shop/allproduct', list: 'Shop' },
            { path: '/About_Us', list: 'About Us' },
            { path: '/Contect_Us', list: 'Contact Us' },
          ].map((item) => (
            <li key={item.path} className="cursor-pointer flex flex-col items-center">
              <Link
                to={item.path}
                className={isActive(item.path) ? 'text-white font-bold' : 'text-white'}
              >
                {item.list}
              </Link>
              {isActive(item.path) && (
                <hr className="mt-[4px] w-full h-[3px] bg-white rounded-[10px] border-none" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
