// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="flex justify-between items-center py-5 font-medium">
//       <img src={assets.logo} className="w-80" alt="" />
//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
//         <NavLink to="/" className="flex flex-col items-center gap-1">
//           <p>HOME</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/collection" className="flex flex-col items-center gap-1">
//           <p>COLLECTION</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           <p>ABOUT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/contact" className="flex flex-col items-center gap-1">
//           <p>CONTACT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>
//       <div className="flex items-center gap-6">
//         <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
//         <div className="group relative">
//           <img
//             className="w-5 cursor-pointer"
//             src={assets.profile_icon}
//             alt=""
//           />
//           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//               <p className="cursor-pointer hover:text-black">My profile</p>
//               <p className="cursor-pointer hover:text-black">Orders</p>
//               <p className="cursor-pointer hover:text-black">Logout</p>
//             </div>
//           </div>
//         </div>
//         <Link to={"/cart"} className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5 " alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
//             10
//           </p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt=""
//         />
//         {/* Sidebar menu for mobile view */}
//         <div
//           className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//             visible ? "w-full" : "w-0"
//           } `}
//         >
//           <div className="flex flex-col text-gray-600">
//             <div
//               onClick={() => setVisible(false)}
//               className="flex items-center gap-4 p-3 cursor-pointer"
//             >
//               <img
//                 className="h-4 rotate-180"
//                 src={assets.dropdown_icon}
//                 alt=""
//               />
//               <p>Back</p>
//             </div>
//             <NavLink
//               onClick={() => setVisible(false)}
//               className="py-2 pl-6 border"
//               to="/"
//             >
//               HOME
//             </NavLink>
//             <NavLink
//               onClick={() => setVisible(false)}
//               className="py-2 pl-6 border"
//               to="/collection"
//             >
//               COLLECTION
//             </NavLink>
//             <NavLink
//               onClick={() => setVisible(false)}
//               className="py-2 pl-6 border"
//               to="/about"
//             >
//               ABOUT
//             </NavLink>
//             <NavLink
//               onClick={() => setVisible(false)}
//               className="py-2 pl-6 border"
//               to="/contact"
//             >
//               CONTACT
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      {/* // <div className="flex justify-between items-center px-5 py-5 font-medium shadow-md relative sm:static bg-white z-50"> */}
      <Link to={"/"}>
        <img src={assets.logo} className="w-40 sm:w-60" alt="Logo" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, i) => (
          <NavLink
            to={path}
            key={path}
            className="flex flex-col items-center gap-1"
          >
            <p>{["HOME", "COLLECTION", "ABOUT", "CONTACT"][i]}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-40 transition-all duration-300 ease-in-out ${
          visible ? "w-64 shadow-lg" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 text-sm h-full pt-10 px-5">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 mb-6 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <p>Back</p>
          </div>

          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((name, i) => (
            <NavLink
              key={name}
              to={["/", "/collection", "/about", "/contact"][i]}
              onClick={() => setVisible(false)}
              className="py-3 border-b"
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
