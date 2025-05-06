// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Tittle from "../components/Tittle";
// import { assets } from "../assets/assets";
// import CartTotal from "../components/CartTotal";
// const Cart = () => {
//   const { products, currency, carItem, updateQuantity } =
//     useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const items in carItem) {
//       for (const item in carItem[items]) {
//         if (carItem[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: carItem[items][item],
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [carItem]);
//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl pb-3">
//         <Tittle text1={"YOUR"} text2={"CART"} />
//       </div>
//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );
//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className="flex items-center gap-6">
//                 <img
//                   className="w-16 sm:w-20"
//                   src={productData.image[0]}
//                   alt=""
//                 />
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium">
//                     {productData.name}
//                   </p>
//                   <div className="flex items-center gap-5 mt-2">
//                     <p>
//                       {currency}
//                       {productData.price}
//                     </p>
//                     <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">
//                       {item.size}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <input
//                 onChange={(e) =>
//                   e.target.value === "" || e.target.value === "0"
//                     ? null
//                     : updateQuantity(
//                         item._id,
//                         item.size,
//                         Number(e.target.value)
//                       )
//                 }
//                 className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                 type="number"
//                 min={1}
//                 defaultValue={item.quantity}
//               />
//               <img
//                 onClick={() => updateQuantity(item._id, item.size, 0)}
//                 className="w-4 mr-4 sm:w-5 cursor-pointer"
//                 src={assets.bin_icon}
//                 alt=""
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";

const Cart = () => {
  const { products, currency, carItem, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in carItem) {
        for (const item in carItem[items]) {
          if (carItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: carItem[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [carItem, products]);

  return (
    <div className="border-t pt-14 px-4 sm:px-10 min-h-screen">
      {/* Page Title */}
      <div className="text-3xl font-bold text-start mb-10">
        <Tittle text1={"YOUR"} text2={"CART"} />
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 border rounded-2xl p-5 bg-white "
              >
                {/* Product image */}
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-semibold text-gray-800">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <p>
                          Price: {currency}
                          {productData.price}
                        </p>
                        <p className="border px-2 py-1 rounded-full bg-gray-100">
                          {item.size}
                        </p>
                      </div>
                    </div>

                    {/* Quantity and Delete */}
                    {/* <div className="flex items-center gap-4 mt-4 sm:mt-0">
                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                        className="w-16 border rounded-md text-center py-1 focus:ring-2 focus:ring-gray-300"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 transition"
                      >
                        <img
                          src={assets.bin_icon}
                          alt="Delete"
                          className="w-4"
                        />
                      </button>
                    </div> */}
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                        className="w-16 border rounded-md text-center py-1 focus:ring-2 focus:ring-gray-300"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                      <button
                        onClick={() => {
                          updateQuantity(item._id, item.size, 0);
                          toast.success("Item removed from cart");
                        }}
                        className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 transition"
                      >
                        <img
                          src={assets.bin_icon}
                          alt="Delete"
                          className="w-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-16 text-lg">
            Your cart is empty 🛒
          </div>
        )}
      </div>

      {/* Cart Total Section */}
      {/* <div className="flex justify-end my-16">
        <div className="w-full sm:w-[450px] bg-white border rounded-2xl shadow-md p-6">
          <CartTotal /> */}
      {/* Checkout Button */}
      {/* <button
            onClick={() => navigate("/place-order")}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div> */}

      {cartData.length > 0 && (
        <div className="flex justify-end my-16">
          <div className="w-full sm:w-[450px] bg-white border rounded-2xl shadow-md p-6">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
