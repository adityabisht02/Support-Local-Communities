import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { ThemeContext } from "../ThemeContext";
import Sun from '../assets/sun.gif';
import Moon from '../assets/nightTheme/moon.gif';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [theme]);

  if (user.isLoggedIn){
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
            <button className="px-6 py-2  bg-blue-900 hover:bg-blue-700 font-bold text-white text-xl">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div className={`navbar ${navbarCSS}`}>
      <div className="py-1">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="logo-image" />
            <div className="text-4xl font-bold">Support-Local</div>
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
                {/* <Link to="/createEvent">Create event</Link> */}
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
                {/* <Link to="/createDonation">Create fundraiser</Link> */}
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
                {/* <Link to="/artworkform">Submit Art</Link> */}
              </div>
            </div>
            {theme === "light" ? (
                  <>
                    <img src={Sun} className="sun-icon" alt="sun"/>
                    <span className="sr-only">Light mode</span>
                  </>
                ) : (
                  <>
                    <img src={Moon} className="moon-icon" alt="moon"/>
                    <span className="sr-only">Dark mode</span>
                  </>
                )}
             <button className="theme-toggle-btn" onClick={toggleTheme}>
              <div className="theme-toggle-slider" />
              <div className="theme-toggle-icon">
                
              </div>
            </button>
            {/* logout the user */}
            <button className="px-6 py-2  bg-blue-900 hover:bg-blue-700 font-bold text-white text-xl border border-blue-700 rounded" onClick={loginUser}>
              Login
            </button>
            <button className="px-6 py-2  bg-blue-900 hover:bg-blue-700 font-bold text-white text-xl border border-blue-700 rounded" onClick={registerUser}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }            
}

export default Navbar;
