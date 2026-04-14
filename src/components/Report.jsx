import React, { useState } from "react";
import axios from "axios";
import "./Report.css";

const Report = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  // ✅ Your LIVE backend URL (replace with your real one)
  const API_URL = "https://your-backend.onrender.com";

  const fetchReport = async () => {
    if (!date) {
      alert("Select date");
      return;
    }

    try {
      const res = await axios.get(
        `${API_URL}/report?date=${date}`
      );

      setData(res.data.data || []);
      setTotal(res.data.total || 0);
    } catch (err) {
      console.log(err);
      alert("Error fetching report ❌");
    }
  };

  return (
    <div className="report-container">
      <h2>Date-wise Report</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={fetchReport}>Get Report</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.amount}</td>
              <td>{item.payment_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Report;