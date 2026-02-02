import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-indigo-500 text-white text-xl font-bold
        shadow-lg
        hover:bg-indigo-600 hover:scale-110
        transition duration-300
        flex items-center justify-center
      "
    >
      ↑
    </button>
  );
}
