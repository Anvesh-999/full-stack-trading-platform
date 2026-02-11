import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authAxios";
import tradeApi from "../api/tradeAxios";

const Holdings = () => {
  const navigate = useNavigate();
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 1️⃣ Verify JWT
        const auth = await authApi.post("/");
        if (!auth.data.status) {
          navigate("/login");
          return;
        }

        // 2️⃣ Fetch Holdings
        const res = await tradeApi.get("/allHoldings");
        setAllHoldings(res.data);

      } catch (err) {
        navigate("/login");
      }
    };

    loadData();
  }, [navigate]);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
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

export default Holdings;
