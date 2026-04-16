
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const ok = login(email, password);
    if (ok) navigate("/dashboard");
    else setError("Invalid email or password");
  }

  return (
    <>
      <div className="auth">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>

      {/* Minimal CSS */}
      <style>{`
        .auth {
          width: 300px;
          margin: 50px auto;
          text-align: center;
        }

        .auth input {
          display: block;
          width: 100%;
          margin: 8px 0;
          padding: 8px;
        }

        .auth button {
          width: 100%;
          padding: 8px;
          background: teal;
          color: white;
          border: none;
        }

        .error {
          color: red;
        }
      `}</style>
    </>
  );
}

export default Login;