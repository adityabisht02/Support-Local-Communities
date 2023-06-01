import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <ul>
      <li><a href="/donations">Fundraising</a></li>
      <li><a href="/createDonation">Create Funds</a></li>
      <li className="activeList"><a className="active" href="/">Support Local</a></li>
    </ul>
  );
};

export default Navigation;
