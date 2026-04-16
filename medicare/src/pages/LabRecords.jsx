import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LAB_TESTS } from "../data/mockData";
import PriceTable from "../components/PriceTable";

function LabRecords() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // filter
  const filtered = LAB_TESTS.filter((test) =>
    test.name.toLowerCase().includes(search.toLowerCase())
  );

  // handle booking
  function handleBooking(test) {
    navigate("/form", { state: { test } });
  }

  return (
    <>
      <div className="lab">
        <h1>Lab Tests</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search test..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>Total Tests: {filtered.length}</p>

        {/* Table */}
        {filtered.length > 0 ? (
          <>
            <PriceTable items={filtered} type="lab" />

            {/* Booking Buttons */}
            <div className="booking-list">
              {filtered.map((test) => (
                <div key={test.id} className="booking-card">
                  <span>{test.name}</span>
                  <button onClick={() => handleBooking(test)}>
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No tests found</p>
        )}
      </div>

      {/* CSS */}
      <style>{`
        .lab {
          text-align: center;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        input {
          padding: 10px;
          margin: 15px;
          width: 250px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .booking-list {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .booking-card {
          width: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f9f9f9;
        }

        .booking-card button {
          padding: 6px 12px;
          background: teal;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .booking-card button:hover {
          background: #0f5c58;
        }
      `}</style>
    </>
  );
}

export default LabRecords;