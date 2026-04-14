import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Customers.css";

const Customers = () => {
  const [data, setData] = useState([]);
  const [payAmount, setPayAmount] = useState({});
  const [payDate, setPayDate] = useState({});

  // ✅ FIXED: correct backend URL
  const API_URL = "https://finance-e04s.onrender.com";

  const fetchCustomers = () => {
    axios.get(`${API_URL}/customers`)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Fetch error:", err));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handlePay = async (id) => {
    console.log("🔥 BUTTON CLICKED:", id);

    const amount = Number(payAmount[id]);
    const date = payDate[id];

    if (!amount || !date) {
      alert("Enter amount and select date");
      return;
    }

    const currentCustomer = data.find(c => c.id === id);

    try {
      const res = await axios.post(`${API_URL}/pay`, {
        customer_id: id,
        amount: amount,
        payment_date: date,
      });

      alert(res.data?.message || "Payment successful");

      const newRemaining = currentCustomer.remaining_amount - amount;

      if (newRemaining <= 0) {
        alert("🎉 Loan fully paid! Amount completed.");
      }

      setPayAmount({ ...payAmount, [id]: "" });
      setPayDate({ ...payDate, [id]: "" });

      fetchCustomers();

    } catch (error) {
      console.log("PAY ERROR:", error);
      alert("Server error ❌ Check console");
    }
  };

  return (
    <div className="customers-container">
      <h2>Customers List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Total</th>
            <th>Daily Pay</th>
            <th>Remaining</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>₹{c.total_amount}</td>
              <td>₹{c.daily_pay}</td>

              <td>
                {c.remaining_amount <= 0 
                  ? "✅ Completed" 
                  : `₹${c.remaining_amount}`}
              </td>

              <td>
                <input
                  type="number"
                  placeholder="Amount"
                  value={payAmount[c.id] || ""}
                  onChange={(e) =>
                    setPayAmount({
                      ...payAmount,
                      [c.id]: e.target.value,
                    })
                  }
                />
              </td>

              <td>
                <input
                  type="date"
                  value={payDate[c.id] || ""}
                  onChange={(e) =>
                    setPayDate({
                      ...payDate,
                      [c.id]: e.target.value,
                    })
                  }
                />
              </td>

              <td>
                <button
                  disabled={c.remaining_amount <= 0}
                  onClick={() => handlePay(c.id)}
                >
                  {c.remaining_amount <= 0 ? "Completed" : "Pay"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;