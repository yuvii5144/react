import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [month, setMonth] = useState("");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  // ✅ DIRECT BACKEND URL (no env)
  const API_URL = "https://your-backend.onrender.com";

  const fetchReport = async () => {
    if (!month) {
      alert("Select month");
      return;
    }

    try {
      const res = await axios.get(
        `${API_URL}/report?month=${month}`
      );

      setData(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
      alert("Error fetching report ❌");
    }
  };

  return (
    <div className="home-container">
      <h1>Shree Finance Web</h1>

      <div className="home-buttons">
        <button onClick={() => navigate("/add-customer")}>
          ➕ Add Customer
        </button>

        <button onClick={() => navigate("/customers")}>
          👥 View Customers
        </button>
      </div>

      <div className="report-box">
        <h2>Monthly Collection Report</h2>

        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <button onClick={fetchReport}>Get Report</button>
      </div>

      {data.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Remaining</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.amount}</td>
                  <td>{item.payment_date}</td>
                  <td>₹{item.remaining_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total Collection: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Home;