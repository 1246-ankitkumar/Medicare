
import React from "react";
import { Link } from "react-router-dom";
import { PLANS } from "../data/mockData";

function Plans() {
  return (
    <>
      <div className="plans">
        <h1>Pricing Plans</h1>
        <p>Choose a plan that suits you</p>

        <div className="plan-list">
          {PLANS.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.name}</h3>

              <h2>
                ₹{plan.price}/{plan.billing}
              </h2>

              <ul>
                {plan.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f}>❌ {f}</li>
                ))}
              </ul>

              <Link to="/signup">
                <button>
                  {plan.price === 0 ? "Start Free" : "Buy Plan"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal CSS */}
      <style>{`
        .plans {
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .plan-list {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .plan-card {
          border: 1px solid #ccc;
          padding: 15px;
          width: 200px;
        }

        .plan-card ul {
          text-align: left;
          padding: 0;
        }

        .plan-card li {
          list-style: none;
          margin: 5px 0;
        }

        button {
          margin-top: 10px;
          padding: 8px;
          background: teal;
          color: white;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background: #0f766e;
        }
      `}</style>
    </>
  );
}

export default Plans;