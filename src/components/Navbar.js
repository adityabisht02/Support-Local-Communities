import React, { useContext } from "react";
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { ThemeContext } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import api from "../apis/apis";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  async function logoutUser() {
    //remove appwrite session
    let result = api.deleteCurrentSession();
    //remove loginstatus
    localStorage.removeItem("loginStatus");
  }

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <div className={`navbar ${navbarCSS}`}>
      <div className="py-1">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="logo-image" />
            <div className="text-xl font-bold">Support-Local</div>
          </div>
          <div className="hidden md:flex space-x-12 items-center">
            <Link to="/" className=" hover:text-blue-800 font-bold text-xl">
              Home
            </Link>
            {/* Dropdown navbar element */}
            <div className="dropdown">
              <Link to="/" className="hover:text-blue-800 font-bold text-xl">
                Events
              </Link>
              <div className="dropdown-content">
                <Link to="/events">Events</Link>
                <Link to="/createEvent">Create event</Link>
                <Link to="/getEvents">Events Near Me</Link>
              </div>
            </div>

            <div className="dropdown">
              <Link
                to="/"
                className="hover:text-blue-800 font-bold text-xl dropbtn"
              >
                Donations
              </Link>
              <div className="dropdown-content">
                <Link to="/donations">Donations</Link>
                <Link to="/createDonation">Create fundraiser</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link
                to="/"
                className="hover:text-blue-800 font-bold text-xl dropbtn"
              >
                Marketplace
              </Link>
              <div className="dropdown-content">
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/artworkform">Submit Art</Link>
              </div>
            </div>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              <div className="theme-toggle-slider" />
              <div className="theme-toggle-icon">
                {theme === "light" ? (
                  <FaSun className="sun" />
                ) : (
                  <FaMoon className="moon" />
                )}
              </div>
            </button>
            {/* logout the user */}
            <button
              className="px-6 py-2  bg-blue-900 hover:bg-blue-700 font-bold text-white text-xl"
              onClick={logoutUser}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
