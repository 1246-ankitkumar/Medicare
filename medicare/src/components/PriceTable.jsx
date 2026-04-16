
import React from 'react';
import { HOSPITALS } from '../data/mockData';

export default function PriceTable({ items, type = 'surgery' }) {

  const formatPrice = (price) => "₹" + price;

  const getMin = (prices) => Math.min(...Object.values(prices));
  const getMax = (prices) => Math.max(...Object.values(prices));

  return (
    <div style={{ padding: "20px", overflowX: "auto" }}>
      
      {/* Inline CSS */}
      <style>
        {`
          .price-table {
            width: 100%;
            border-collapse: collapse;
            font-family: Arial, sans-serif;
          }

          .price-table th,
          .price-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
          }

          .price-table th {
            background-color: #2c3e50;
            color: white;
          }

          .price-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .price-table tr:hover {
            background-color: #f1f1f1;
          }

          .cheap {
            background-color: #d4edda;
            font-weight: bold;
          }

          .expensive {
            background-color: #f8d7da;
            font-weight: bold;
          }
        `}
      </style>

      <table className="price-table">
        <thead>
          <tr>
            <th>{type}</th>
            {type !== 'medication' && <th>Category</th>}
            {HOSPITALS.map(h => (
              <th key={h.id}>{h.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            const min = getMin(item.prices);
            const max = getMax(item.prices);

            return (
              <tr key={item.id}>
                <td>{item.name}</td>

                {type !== 'medication' && (
                  <td>{item.category}</td>
                )}

                {HOSPITALS.map(h => {
                  const price = item.prices[h.id];

                  let className = '';
                  if (price === min) className = 'cheap';
                  if (price === max) className = 'expensive';

                  return (
                    <td key={h.id} className={className}>
                      {formatPrice(price)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}