import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const { navigate, token, setCarItem, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const userId = searchParams.get("userId"); // ✅ Get userId from URL

  const verifyPayment = async () => {
    try {
      if (!token || !userId || !orderId) {
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId, userId }, // ✅ Send userId
        { headers: { token } }
      );

      if (response.data.success) {
        setCarItem({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error("Verification failed: " + error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      ⏳ Verifying your payment...
    </div>
  );
};

export default Verify;
