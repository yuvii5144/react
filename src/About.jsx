import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
     <h1>About Financial Management System</h1>

      <p>
        The Financial Management System is a web-based application designed to
        manage customer loans, track daily payments, and maintain accurate
        financial records. It helps finance businesses handle transactions
        efficiently and reduces manual errors.
      </p>

      <h2>📌 Key Features</h2>
      <ul>
        <li>Add and manage customer details</li>
        <li>Track daily loan payments</li>
        <li>Automatically update remaining balance</li>
        <li>Prevent overpayment</li>
        <li>Generate monthly collection reports</li>
      </ul>

      <h2>🏢 Owner Information</h2>
      <p><b>Business Name:</b> Shree Finance</p>
      <p><b>Owner Name:</b> Dasharath Ram Muli</p>
      <p><b>Contact Number:</b> 9823585144</p>
      <p><b>Email:</b>dasharathmuli@gmail.com</p>
      <p><b>Address:</b>Budhawar Peth , Dhanagar Galli Akkalkot</p>

      <h2>🎯 Objective</h2>
      <p>
        The main objective of this system is to simplify financial operations,
        improve accuracy, and provide a reliable digital solution for managing
        customer loans and payments.
      </p>

      <button onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default About;