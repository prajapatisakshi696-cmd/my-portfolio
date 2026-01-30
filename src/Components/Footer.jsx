import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Sakshi. All rights reserved.</p>
    </footer>
  );
}