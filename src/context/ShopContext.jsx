import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
import axios from "axios";

const ShopContextProvider = (props) => {
  const currency = "₹";

  const delivery_fee = 50;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [carItem, setCarItem] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    let cartData = structuredClone(carItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCarItem(cartData);
    toast.success("Item added to cart");
    if (token) {
      try {
        await axios.post(
          backendUrl + `/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let count = 0;
    for (const items in carItem) {
      for (const item in carItem[items]) {
        try {
          if (carItem[items][item] > 0) {
            count += carItem[items][item];
          }
        } catch (error) {}
      }
    }
    return count;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(carItem);
    cartData[itemId][size] = quantity;
    setCarItem(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + `/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let amount = 0;
    for (const items in carItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in carItem[items]) {
        try {
          if (carItem[items][item] > 0) {
            amount += itemInfo.price * carItem[items][item];
          }
        } catch (error) {}
      }
    }
    return amount;
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + `/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCarItem(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  });

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    carItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCarItem,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
