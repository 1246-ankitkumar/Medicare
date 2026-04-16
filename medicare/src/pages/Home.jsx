import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOSPITALS } from "../data/mockData";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/pricing?q=${search}`);
    }
  }

  return (
    <>
      <div className="home">

        {/* Hero */}
        <section className="hero">
          <h1>Compare Hospital Prices</h1>
          <p>Find affordable healthcare options easily</p>

          <form onSubmit={handleSearch} className="search-box">
            <input
              type="text"
              placeholder="Search surgery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>

        {/* Hospitals */}
        <section className="section">
          <h2>Our Partner Hospitals</h2>

          <div className="hospital-list">
            {HOSPITALS.map((h) => (
              <div key={h.id} className="card">
                <h3>{h.name}</h3>
                <p>{h.city}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback */}
        <section className="section">
          <h2>What Users Say</h2>

          <div className="feedback-list">
            <div className="card">
              <p>"Saved a lot of money on my surgery!"</p>
              <span>- Rahul</span>
            </div>

            <div className="card">
              <p>"Very easy to compare hospitals."</p>
              <span>- Priya</span>
            </div>

            <div className="card">
              <p>"Helpful and simple website."</p>
              <span>- Aman</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Get Started Today</h2>
          <p>Compare prices and choose the best hospital</p>

          <Link to="/signup">
            <button className="cta-btn">Signup Now</button>
          </Link>
        </section>

      </div>

      {/* THEME + CSS */}
      <style>{`

        :root {
          --primary: #176E6A;
          --secondary: #2FA8A1;
          --accent: #00C9A7;
          --bg: #F5F7F7;
          --text-dark: #1E2D2F;
          --text-light: #6B7C7D;
          --border: #E0E6E6;
        }

        body {
          margin: 0;
          background: var(--bg);
        }

        .home {
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
          color: var(--text-dark);
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 80px 20px;
        }

        .hero h1 {
          font-size: 38px;
          margin-bottom: 10px;
        }

        .hero p {
          font-size: 18px;
          opacity: 0.9;
        }

        .search-box {
          margin-top: 25px;
        }

        .search-box input {
          padding: 12px;
          width: 260px;
          border: none;
          border-radius: 6px;
          outline: none;
        }

        .search-box button {
          padding: 12px 18px;
          margin-left: 10px;
          border: none;
          border-radius: 6px;
          background: var(--accent);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .search-box button:hover {
          background: var(--secondary);
        }

        /* SECTION */
        .section {
          padding: 60px 20px;
        }

        .section h2 {
          margin-bottom: 25px;
          font-size: 26px;
        }

        /* CARDS */
        .hospital-list,
        .feedback-list {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          padding: 20px;
          width: 220px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card h3 {
          margin-bottom: 8px;
        }

        .card p {
          font-size: 14px;
          color: var(--text-light);
        }

        /* CTA */
        .cta {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          color: white;
          padding: 70px 20px;
        }

        .cta h2 {
          font-size: 30px;
        }

        .cta-btn {
          margin-top: 20px;
          padding: 14px 26px;
          font-size: 16px;
          background: white;
          color: var(--primary);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #e6f7f6;
        }

      `}</style>
    </>
  );
}

export default Home;