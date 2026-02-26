import React from "react";

const counters = [
  { number: "500K+", label: "Happy Customers" },
  { number: "1M+", label: "Consultations Delivered" },
  { number: "250+", label: "Astrologers Available" },
  { number: "100+", label: "Services Offered" },
];

const Counter = () => {
  return (
    <section className="counter-section">
      <div className="counter-container">
        <div className="counter-grid">
          {counters.map((item, index) => (
            <div key={index} className="counter-item">
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
