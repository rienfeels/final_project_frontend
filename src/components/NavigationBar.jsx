import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/daily-report-form">Daily Report Form</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavigationBar;
