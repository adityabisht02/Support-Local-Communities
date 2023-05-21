import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <ul>
    <li><a href="/events">Events</a></li>
    <li><a href="/getEvents">Events near me</a></li>
    <li><a href="/createEvent">Create Event</a></li>
    <li className="activeList"><a className="active" href="/">Home</a></li>
  </ul>
  );
};

export default Navigation;
