import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [stripingSheets, setStripingSheets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/forms");
        if (response.ok) {
          const data = await response.json();
          setStripingSheets(data);
        } else {
          console.error(
            "Failed to fetch striping sheets:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching striping sheets:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Striping Sheets Dashboard</h2>

      {stripingSheets.length === 0 ? (
        <p>No striping sheets available</p>
      ) : (
        <div>
          <h3>Summary</h3>
          <p>Total Striping Sheets: {stripingSheets.length}</p>

          <h3>Recent Striping Sheets</h3>
          <ul>
            {stripingSheets.slice(0, 5).map((sheet) => (
              <li key={sheet.id}>
                <strong>{sheet.road_name}</strong> - Submitted by{" "}
                {sheet.user.username} on {sheet.date_submitted}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
