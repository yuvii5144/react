import React, { useState } from "react";
import axios from "axios";
import "./AddCustomer.css";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");

  // ✅ Your LIVE backend URL (replace with your real Render link)
  const API_URL = "https://your-backend.onrender.com";

  const handleSubmit = async () => {
    if (!startDate) {
      alert("Please select start date");
      return;
    }

    const dailyPay = amount / 100;

    console.log("Sending:", {
      name,
      phone,
      total_amount: amount,
      start_date: startDate,
    });

    try {
      await axios.post(`${API_URL}/add-customer`, {
        name,
        phone,
        total_amount: amount,
        start_date: startDate,
        daily_pay: dailyPay,
        remaining_amount: amount,
      });

      alert("Customer Added ✅");

      setName("");
      setPhone("");
      setAmount("");
      setStartDate("");
    } catch (err) {
      console.log(err);
      alert("Error adding customer ❌");
    }
  };

  return (
    <div className="add-customer-container">
      <h2>Add Customer</h2>

      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Phone</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>Total Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Customer</button>
    </div>
  );
};

export default AddCustomer;