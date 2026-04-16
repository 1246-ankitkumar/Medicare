import React from "react";
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();
  const test = location.state?.test;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Book Appointment</h2>

      {test && <p>Test: {test.name}</p>}

      <form>
        <input type="text" placeholder="Your Name" required /><br /><br />
        <input type="tel" placeholder="Phone Number" required /><br /><br />
        <input type="date" required /><br /><br />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Form;