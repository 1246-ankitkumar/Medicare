
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [section, setSection] = useState("Overview");

  if (!user) {
    return (
      <div className="center">
        <div className="card">
          <h2>🔒 Login Required</h2>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="dashboard">
        <h1>Welcome, {user.name} 👋</h1>

        {/* Navigation */}
        <div className="nav">
          <button onClick={() => setSection("Overview")}>Overview</button>
          <button onClick={() => setSection("Records")}>Records</button>
          <button onClick={() => setSection("Appointments")}>Appointments</button>
        </div>

        {/* Overview */}
        {section === "Overview" && (
          <div className="card">
            <h2>Overview</h2>
            <div className="grid">
              <div className="box">
                <h3>{user.healthRecords.length}</h3>
                <p>Records</p>
              </div>
              <div className="box">
                <h3>{user.appointments.length}</h3>
                <p>Appointments</p>
              </div>
            </div>
          </div>
        )}

        {/* Records */}
        {section === "Records" && (
          <div className="card">
            <h2>Health Records</h2>

            {user.healthRecords.length === 0 ? (
              <p>No records</p>
            ) : (
              user.healthRecords.map((r) => (
                <div key={r.id} className="item">
                  <p><strong>{r.type}</strong></p>
                  <p>{r.note}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Appointments */}
        {section === "Appointments" && (
          <div className="card">
            <h2>Appointments</h2>

            {user.appointments.length === 0 ? (
              <p>No appointments</p>
            ) : (
              user.appointments.map((a) => (
                <div key={a.id} className="item">
                  <p><strong>{a.hospital}</strong></p>
                  <p>{a.date}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          background: #f5f7f7;
          font-family: Arial, sans-serif;
        }

        .dashboard {
          text-align: center;
          padding: 20px;
        }

        h1 {
          color: #0a6e6e;
        }

        /* Navigation */
        .nav {
          margin: 20px 0;
        }

        button {
          margin: 5px;
          padding: 10px 15px;
          background: #0a6e6e;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #085c5c;
        }

        /* Card */
        .card {
          background: white;
          padding: 20px;
          margin: 20px auto;
          width: 90%;
          max-width: 500px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        /* Grid */
        .grid {
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
        }

        .box {
          background: #e6f4f4;
          padding: 15px;
          border-radius: 8px;
          width: 40%;
        }

        .box h3 {
          margin: 0;
          color: #0a6e6e;
        }

        /* Items */
        .item {
          background: #f9f9f9;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
        }

        /* Center */
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Dashboard;