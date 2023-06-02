import React from "react";
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";

function Navbar() {
  const [account, setAccount] = useState("");

  return (
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
              <Link to="/createDonation">Create fundraiser</Link>

              <Link to="/donations">Donations</Link>
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
              <Link className="font-semibold items-center" to="/marketplace">
                Marketplace
              </Link>
              <Link className="font-semibold items-center" to="/artworkform">
                Submit Art
              </Link>
            </div>
          </div>

          {/* logout the user */}
          <button className="px-6 py-2  bg-blue-900 hover:bg-blue-700 font-bold text-white text-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
