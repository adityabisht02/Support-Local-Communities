import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <ul>
    <li><a href="/marketplace">Art Market</a></li>
    <li><a href="/artworkform">Submit Art</a></li>
    <li className="activeList"><a className="active" href="/">Support Local</a></li>
  </ul>
  );
};

export default Navigation;
