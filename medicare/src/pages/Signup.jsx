
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const ok = signup(name, email, password);
    if (ok) {
      navigate("/dashboard");
    } else {
      setError("Signup failed");
    }
  }

  return (
    <>
      <div className="auth">
        <h2>Signup</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/* CSS inside same file */}
      <style>{`
        .auth {
          width: 300px;
          margin: 50px auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .auth h2 {
          margin-bottom: 20px;
        }

        .auth form {
          display: flex;
          flex-direction: column;
        }

        .auth input {
          padding: 10px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .auth button {
          padding: 10px;
          margin-top: 10px;
          background-color: #0ea5e9;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .auth button:hover {
          background-color: #0284c7;
        }

        .auth p {
          margin-top: 15px;
          font-size: 14px;
        }

        .error {
          color: red;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default Signup;