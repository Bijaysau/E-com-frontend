// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Tittle from "../components/Tittle";
// const Orders = () => {
//   const { products, currency } = useContext(ShopContext);
//   return (
//     <div className="border-t pt-16">
//       <div className="'text-2xl">
//         <Tittle text1={"MY"} text2={"ORDERS"} />
//       </div>

//       <div>
//         {products.slice(1, 4).map((item, index) => (
//           <div
//             key={index}
//             className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
//           >
//             <div className="flex items-start gap-6 text-sm">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
//               <div>
//                 <p className="sm:text-base font-medium">{item.name}</p>
//                 <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
//                   <p className="text-lg">
//                     {currency}
//                     {item.price}
//                   </p>
//                   <p>Quantity: 1</p>
//                   <p>Size: M</p>
//                 </div>
//                 <p className="mt-2">
//                   Date: <span className="text-gray-400">25, july 2025</span>
//                 </p>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-between">
//               <div className="flex items-center gap-2">
//                 <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                 <p className="text-sm md:text-base">Ready to ship</p>
//               </div>
//               <button className="border px-4 py-2 text-sm font-medium rounded-sm">
//                 Track Order
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Tittle from "../components/Tittle";
// import axios from "axios";

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);

//   const [orderData, setOrderData] = useState([]);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }

//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         let allOrdersItem = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             allOrdersItem.push(item);
//           });
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {}
//   };
//   useEffect(() => {
//     loadOrderData();
//   }, [token]);
//   return (
//     <div className="border-t pt-16 px-4 sm:px-10 lg:px-20 bg-white min-h-screen">
//       <div className="mb-8">
//         <Tittle text1={"MY"} text2={"ORDERS"} />
//       </div>

//       <div className="grid gap-6">
//         {orderData.slice(1, 4).map((item, index) => (
//           <div
//             key={index}
//             className="border rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition bg-gray-50"
//           >
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//               {/* Left side - Image & Info */}
//               <div className="flex gap-4 sm:gap-6">
//                 <img
//                   className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
//                   src={item.image[0]}
//                   alt={item.name}
//                 />
//                 <div className="text-sm sm:text-base">
//                   <h2 className="font-semibold text-gray-800">{item.name}</h2>
//                   <p className="text-gray-600 mt-1">
//                     <span className="font-medium">Price:</span> {currency}
//                     {item.price}
//                   </p>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   <p className="text-gray-600">
//                     <span className="font-medium">Size:</span> {item.size}
//                   </p>
//                   <p className="text-gray-400 mt-1 text-xs">
//                     Order Date:{" "}
//                     <span>{new Date(item.date).toDateString()}</span>
//                   </p>
//                   <p className="text-gray-400 mt-1 text-xs">
//                     Payment:
//                     <span>{item.paymentMethod}</span>
//                   </p>
//                 </div>
//               </div>

//               {/* Right side - Status & Button */}
//               <div className="md:w-1/2 flex justify-between">
//                 <div className="flex items-center gap-2">
//                   <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                   <p className="text-sm md:text-base text-green-500">
//                     {item.status}
//                   </p>
//                 </div>
//                 <button
//                   onClick={loadOrderData}
//                   className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
//                 >
//                   Track Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "../components/Tittle";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 px-4 sm:px-10 lg:px-20 bg-white min-h-screen">
      <div className="mb-8">
        <Tittle text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="grid gap-6">
        {orderData.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-10">
            Your Orders Box is Empty
          </div>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition bg-gray-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left side - Image & Info */}
                <div className="flex gap-4 sm:gap-6">
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div className="text-sm sm:text-base">
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 mt-1">
                      <span className="font-medium">Price:</span> {currency}
                      {item.price}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">
                      <span className="font-medium">Size:</span> {item.size}
                    </p>
                    <p className="text-gray-400 mt-1 text-xs">
                      Order Date:{" "}
                      <span>{new Date(item.date).toDateString()}</span>
                    </p>
                    <p className="text-gray-400 mt-1 text-xs">
                      Payment: <span>{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>

                {/* Right side - Status & Button */}
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base text-green-500">
                      {item.status}
                    </p>
                  </div>
                  <button
                    onClick={loadOrderData}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
// <div className="grid gap-6">
//       {orderData.map((item, index) => (
//         <div
//           key={index}
//           className="border rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition bg-gray-50"
//         >
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             {/* Left side - Image & Info */}
//             <div className="flex gap-4 sm:gap-6">
//               <img
//                 className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
//                 src={item.image[0]}
//                 alt={item.name}
//               />
//               <div className="text-sm sm:text-base">
//                 <h2 className="font-semibold text-gray-800">{item.name}</h2>
//                 <p className="text-gray-600 mt-1">
//                   <span className="font-medium">Price:</span> {currency}
//                   {item.price}
//                 </p>
//                 <p className="text-gray-600">Quantity: {item.quantity}</p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Size:</span> {item.size}
//                 </p>
//                 <p className="text-gray-400 mt-1 text-xs">
//                   Order Date:{" "}
//                   <span>{new Date(item.date).toDateString()}</span>
//                 </p>
//                 <p className="text-gray-400 mt-1 text-xs">
//                   Payment: <span>{item.paymentMethod}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Right side - Status & Button */}
//             <div className="md:w-1/2 flex justify-between">
//               <div className="flex items-center gap-2">
//                 <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                 <p className="text-sm md:text-base text-green-500">
//                   {item.status}
//                 </p>
//               </div>
//               <button
//                 onClick={loadOrderData}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
//               >
//                 Track Order
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
