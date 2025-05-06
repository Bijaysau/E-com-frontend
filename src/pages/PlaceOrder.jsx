// import React, { useContext, useState } from "react";
// import Tittle from "../components/Tittle";
// import CartTotal from "../components/CartTotal";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");

//   const { navigate } = useContext(ShopContext);

//   return (
//     <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[60vh] border-t">
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Tittle text1={"DELIVERY"} text2={"INFORMATION"} />
//         </div>
//         <div className="flex gap-3">
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="text"
//             placeholder="First name"
//
//           />
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="text"
//             placeholder="Last name"
//
//           />
//         </div>
//         <input
//required;
//           className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//           type="email"
//           placeholder=" Email address"
//
//         />
//         <input
//required;
//           className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//           type="text"
//           placeholder=" Street"
//
//         />
//         <div className="flex gap-3">
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="text"
//             placeholder="City"
//
//           />
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="text"
//             placeholder="State"
//
//           />
//         </div>
//         <div className="flex gap-3">
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="Zipcode"
//             placeholder="Zip code"
//
//           />
//           <input
//required;
//             className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//             type="Country"
//             placeholder="Country"
//
//           />
//         </div>
//         <input
//required;
//           className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//           type="tel"
//           placeholder="Phone Number"
//
//         />
//       </div>
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Tittle text1={"PAYMENT"} text2={"METHOD"} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod("stripe")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "stripe" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
//             </div>

//             <div
//               onClick={() => setMethod("razorpay")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "razorpay" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
//             </div>

//             <div
//               onClick={() => setMethod("cod")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "cod" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <p className="text-gray-500 text-sm font-medium mx-4 ">
//                 CASH ON DELIVERY
//               </p>
//             </div>
//           </div>

//           <div className="w-full text-end mt-8">
//             <button
//               onClick={() => navigate("/orders")}
//               className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               PLACE ORDER
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;

import React, { useContext, useState } from "react";
import Tittle from "../components/Tittle";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    token,
    carItem,
    setCarItem,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handlePlaceOrder = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // must be defined in .env file
      amount: order.amount, // in paisa (100 = ₹1)
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log("Payment Success:", response);
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorPay",
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCarItem({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in carItem) {
        for (const item in carItem[items]) {
          if (carItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = carItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCarItem({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          const responStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responStripe.data.success) {
            const { session_url } = responStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responStripe.data.message);
          }
          break;
        case "razorpay":
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[60vh] border-t"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Tittle text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={handlePlaceOrder}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={handlePlaceOrder}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          onChange={handlePlaceOrder}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          type="email"
          placeholder=" Email address"
        />
        <input
          required
          onChange={handlePlaceOrder}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          type="text"
          placeholder=" Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={handlePlaceOrder}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={handlePlaceOrder}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={handlePlaceOrder}
            name="zip"
            value={formData.zip}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            onChange={handlePlaceOrder}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={handlePlaceOrder}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded-xl py-3 px-4 w-full text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          type="tel"
          placeholder="Phone Number"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Tittle text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
