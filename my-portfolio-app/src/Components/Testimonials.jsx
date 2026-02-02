import React from "react";

export default function Testimonials() {
  const items = [
    { text: "Great work and very quick!", who: "Client A" },
    { text: "Very professional and helpful.", who: "Mentor B" },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg
                         hover:-translate-y-1 transition duration-300"
            >
              <p className="text-gray-300 italic mb-4">
                “{t.text}”
              </p>

              <h4 className="text-sm font-semibold text-indigo-400">
                — {t.who}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
