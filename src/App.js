import React, { useState, useCallback } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PaintingMarketplace from "./marketplace/pages/PaintingMarketplace";
import ArtworkForm from "./marketplace/pages/ArtworkForm";
import EventLists from "./events/pages/EventListsPage";
import EventPost from "./events/pages/EventPostPage";
import CreateEvent from "./events/pages/CreateEventPage";
import GetEvents from "./events/pages/GetEventsPage";
import DonationForm from "./donations/pages/DonationForm";
import DonationList from "./donations/pages/DonationList";
import DonationPost from "./donations/pages/DonationPost";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import "./components/Home.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/events" element={<EventLists />} exact />
          <Route path="/marketplace" element={<PaintingMarketplace />} exact />
          <Route path="/artworkform" element={<ArtworkForm />} exact />
          <Route path="/event/:id" element={<EventPost />} exact />
          <Route path="/createEvent" element={<CreateEvent />} exact />
          <Route path="/getEvents" element={<GetEvents />} exact />
          <Route path="/createDonation" element={<DonationForm />} exact />
          <Route path="/donations" element={<DonationList />} exact />
          <Route path="/donations/:postId" element={<DonationPost />} exact />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <div className="footer-home">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
