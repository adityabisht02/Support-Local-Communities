import React from "react";
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [account, setAccount] = useState("");

  return (
    <div className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Support-Local</div>
        <div className="hidden md:flex space-x-12 items-center">
          <Link to="/" className=" hover:text-red-bg-btn font-bold">
            Home
          </Link>
          {/* Dropdown navbar element */}
          <div className="dropdown">
            <Link
              to="/ticketlisting"
              className="hover:text-red-bg-btn font-bold dropbtn"
            >
              Events
            </Link>
            <div className="dropdown-content">
              <Link to="/user">Link1</Link>
              <Link to="/user">Link1</Link>
              <Link to="/user">Link1</Link>
            </div>
          </div>

          <div className="dropdown">
            <Link
              to="/ticketlisting"
              className="hover:text-red-bg-btn font-bold dropbtn"
            >
              Donations
            </Link>
            <div className="dropdown-content">
              <Link to="/user">Link1</Link>

              <Link to="/user">Link1</Link>
              <Link to="/user">Link1</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link
              to="/ticketlisting"
              className="hover:text-red-bg-btn font-bold dropbtn"
            >
              Marketplace
            </Link>
            <div className="dropdown-content">
              <Link to="/user">Link1</Link>
              <Link to="/user">Link1</Link>
              <Link to="/user">Link1</Link>
            </div>
          </div>

          {/* logout the user */}
          <button className="px-6 py-2 bg-red-bg-btn hover:bg-red-500 font-bold text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
