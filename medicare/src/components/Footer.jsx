import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">

        <h2>⚕️ Medicare</h2>
        <p className="tagline">Simple healthcare price comparison platform</p>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>

        <p className="bottom">© 2026 Medicare. All rights reserved.</p>

      </footer>

      {/* Inline CSS */}
      <style>{`
        .footer {
          background: #0a6e6e;
          color: white;
          text-align: center;
          padding: 25px 15px;
        }

        .footer h2 {
          margin-bottom: 8px;
        }

        .tagline {
          font-size: 14px;
          opacity: 0.9;
        }

        .links {
          margin: 15px 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .links a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        .links a:hover {
          text-decoration: underline;
        }

        .bottom {
          margin-top: 10px;
          font-size: 13px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}

export default Footer;