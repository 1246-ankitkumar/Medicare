
import React, { useState } from "react";
import { SURGERIES, MEDICATIONS, LAB_TESTS } from "../data/mockData";
import PriceTable from "../components/PriceTable";

function Pricing() {
  const [tab, setTab] = useState("surgery");
  const [search, setSearch] = useState("");

  let data = [];
  if (tab === "surgery") data = SURGERIES;
  else if (tab === "medication") data = MEDICATIONS;
  else data = LAB_TESTS;

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="pricing">
        <h1>Compare Prices</h1>

        {/* Tabs */}
        <div>
          <button onClick={() => setTab("surgery")}>Surgeries</button>
          <button onClick={() => setTab("medication")}>Medications</button>
          <button onClick={() => setTab("lab")}>Lab Tests</button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>Total: {filtered.length}</p>

        {/* Table */}
        {filtered.length > 0 ? (
          <PriceTable items={filtered} type={tab} />
        ) : (
          <p>No results found</p>
        )}
      </div>

      {/* Minimal CSS */}
      <style>{`
        .pricing {
          text-align: center;
          font-family: Arial, sans-serif;
        }

        button {
          margin: 5px;
          padding: 8px;
          background: teal;
          color: white;
          border: none;
          cursor: pointer;
        }

        input {
          margin: 10px;
          padding: 8px;
        }
      `}</style>
    </>
  );
}

export default Pricing;