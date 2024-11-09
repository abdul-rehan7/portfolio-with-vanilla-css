"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="top-nav">
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Conditionally render sidebar based on toggle state */}
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="close-sign" onClick={toggleSidebar}>×</div>
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      )}

      <div className="mail">
        <a href="mailto:abdulrehan0317@gmail.com">contact@abdulrehan.com</a>
      </div>

      {/* Hide this full navbar on mobile */}
      <div className="navbar">
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

      <div className="contact-us">Contact</div>
    </div>
  );
}
