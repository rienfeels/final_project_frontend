import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DailyReportForm from "./components/DailyReportForm";
import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    // <Router>
    <div>
      <NavigationBar />

      <div className="container">
        <Routes>
          {/* <Route path="/Header" element={<Header />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily-report-form" element={<DailyReportForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </div>
    // </Router>
  );
};

export default App;
