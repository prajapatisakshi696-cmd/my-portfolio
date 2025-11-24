import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const items = [
    { text: "Great work and very quick!", who: "Client A" },
    { text: "Very professional and helpful.", who: "Mentor B" },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="test-grid">
          {items.map((t, i) => (
            <div className="test-card" key={i}>
              <p>“{t.text}”</p>
              <h4>{t.who}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}