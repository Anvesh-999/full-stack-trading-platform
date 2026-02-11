import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authAxios";
import tradeApi from "../api/tradeAxios";

const Positions = () => {
  const navigate = useNavigate();
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 🔐 Step 1: Verify user
        const auth = await authApi.post("/");
        if (!auth.data.status) {
          navigate("/login");
          return;
        }

        // 📊 Step 2: Fetch positions
        const res = await tradeApi.get("/allPositions");
        setAllPositions(res.data);
      } catch (err) {
        navigate("/login");
      }
    };

    loadData();
  }, [navigate]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
