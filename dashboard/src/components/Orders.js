import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authAxios";
import tradeApi from "../api/tradeAxios";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        // 🔐 Verify user
        const auth = await authApi.post("/");
        if (!auth.data.status) {
          navigate("/login");
          return;
        }

        // 📦 Fetch orders
        const res = await tradeApi.get("/allOrders");
        setOrders(res.data);
      } catch (err) {
        navigate("/login");
      }
    };

    loadOrders();
  }, [navigate]);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Order Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td className={order.mode === "BUY" ? "profit" : "loss"}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
