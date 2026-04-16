import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
    setOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <h2 className="logo">⚕️ Medicare</h2>

        {/* Menu Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Links */}
        <div className={`nav-links ${open ? "show" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/pricing"
            className={location.pathname === "/pricing" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/lab-records"
            className={location.pathname === "/lab-records" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Lab
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          )}

          {user ? (
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/signup" className="signup" onClick={() => setOpen(false)}>
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #eee;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          margin: 0;
          color: #0a6e6e;
        }

        .menu-btn {
          display: none;
          font-size: 22px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          padding: 6px 10px;
          border-radius: 6px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          background: #e6f4f4;
          color: #0a6e6e;
        }

        .active {
          background: #0a6e6e;
          color: white !important;
        }

        .signup {
          background: #0a6e6e;
          color: white !important;
        }

        .logout {
          background: #ff4d4d;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
        }

        .logout:hover {
          background: #cc0000;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .menu-btn {
            display: block;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 10px;
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .nav-links.show {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;