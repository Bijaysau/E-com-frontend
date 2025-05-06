// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext"; // correct import
// import { assets } from "../assets/assets";
// import Tittle from "../components/Tittle";
// import ProductItem from "../components/ProductItem";

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilters, setShowFilters] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState("relevent");

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setSubCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   const applyFilters = () => {
//     let productsCopy = products.slice();
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         category.includes(item.category)
//       );
//     }
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         subCategory.includes(item.subCategory)
//       );
//     }
//     setFilterProducts(productsCopy);
//   };

//   const sortProducts = () => {
//     let fpCopy = filterProducts.slice();
//     switch (sortType) {
//       case "low-high":
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//       case "high-low":
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//       default:
//         applyFilters();
//         break;
//     }
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [category, subCategory]);

//   useEffect(() => {
//     sortProducts();
//   }, [sortType]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 bottom-t">
//       <div className="min-w-60">
//         <p
//           className="my-2 text-xl flex items-center cursor-pointer gap-2"
//           onClick={() => setShowFilters(!showFilters)}
//         >
//           FILTERS
//           <img
//             className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
//             src={assets.dropdown_icon}
//             alt=""
//           />
//         </p>
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilters ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Men"}
//                 onChange={toggleCategory}
//               />
//               Men
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Women"}
//                 onChange={toggleCategory}
//               />
//               Women
//             </p>

//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Kids"}
//                 onChange={toggleCategory}
//               />
//               Kids
//             </p>
//           </div>
//         </div>

//         {/* subCategory filters */}

//         <div
//           className={`border border-gray-300 pl-5 py-3 my-5 ${
//             showFilters ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPE</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Topwear"}
//                 onChange={toggleSubCategory}
//               />
//               Topwear
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Bottomwear"}
//                 onChange={toggleSubCategory}
//               />
//               Bottomwear
//             </p>

//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Winterwear"}
//                 onChange={toggleSubCategory}
//               />
//               Winterwear
//             </p>
//           </div>
//         </div>
//       </div>
//       {/*
// Ride side */}

//       <div className="flex-1">
//         <div className="flex justify-between text-base sm:text-2xl mb-4">
//           <Tittle text1={"ALL"} text2={"COLLECTIONS"} />
//           {/* PRODUCT SORT */}

//           <select
//             onChange={(e) => {
//               setSortType(e.target.value);
//             }}
//             className="border-2 border-gray-300 text-sm px-2"
//           >
//             <option value="relavent">Sort by: Relevent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* DISPLAY ITEMS */}

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//           {filterProducts.map((item, index) => (
//             <ProductItem
//               key={index}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length)
      filtered = filtered.filter((item) => category.includes(item.category));
    if (subCategory.length)
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    setFilterProducts(filtered);
  };

  const sortProducts = () => {
    let sorted = [...filterProducts];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilters();
        return;
    }
    setFilterProducts(sorted);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 px-4 sm:px-10">
      {/* Filter Sidebar */}
      <div className="sm:w-64 w-full">
        <div
          className="flex items-center justify-between sm:justify-start gap-2 cursor-pointer text-lg font-semibold mb-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>FILTERS</span>
          <img
            className={`h-4 sm:hidden transition-transform duration-300 ${
              showFilters ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>

        <div className={`${showFilters ? "block" : "hidden"} sm:block`}>
          <div className="border rounded-md border-gray-300 px-4 py-4 mb-4 bg-white shadow-sm">
            <p className="text-sm font-semibold mb-3">CATEGORIES</p>
            {["Men", "Women", "Kids"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 mb-2 text-sm cursor-pointer hover:text-black"
              >
                <input
                  type="checkbox"
                  className="accent-black"
                  value={item}
                  onChange={toggleCategory}
                />
                {item}
              </label>
            ))}
          </div>

          <div className="border rounded-md border-gray-300 px-4 py-4 bg-white shadow-sm">
            <p className="text-sm font-semibold mb-3">TYPE</p>
            {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 mb-2 text-sm cursor-pointer hover:text-black"
              >
                <input
                  type="checkbox"
                  className="accent-black"
                  value={item}
                  onChange={toggleSubCategory}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <Tittle text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none"
          >
            <option value="relavent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
