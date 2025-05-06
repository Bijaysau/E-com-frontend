// import React, { use, useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import { useLocation } from "react-router-dom";

// const Searchbar = () => {
//   const { search, setSearch, showSearch, setShowSearch } =
//     useContext(ShopContext);
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     if (location.pathname.includes("collection")) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   }, [location]);

//   return showSearch && visible ? (
//     <div className="border-t border-b bg-slate-50 text-center">
//       <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 outline-none bg-inherit text-sm"
//           type="text"
//           placeholder="Search"
//         />
//         <img className="w-4" src={assets.search_icon} alt="" />
//       </div>
//       <img
//         onClick={() => setShowSearch(false)}
//         className="inline w-3 cursor-pointer"
//         src={assets.cross_icon}
//         alt=""
//       />
//     </div>
//   ) : null;
// };

// export default Searchbar;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location]);

  if (!showSearch || !visible) return null;

  return (
    <div className="border-y bg-white px-4 py-4 shadow-sm">
      <div className="relative mx-auto w-full sm:w-2/3 lg:w-1/2 flex items-center">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="w-full py-2 pl-5 pr-10 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
        />

        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-4 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-70"
        />
      </div>

      {/* Close Button */}
      <div className="flex justify-center mt-3">
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt="Close"
          className="inline w-3 cursor-pointer opacity-60 hover:opacity-100 transition duration-200"
        />
      </div>
    </div>
  );
};

export default Searchbar;
