import React, { useState, useCallback } from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import EventLists from "./events/pages/EventListsPage";
import EventPost from "./events/pages/EventPostPage";
import CreateEvent from "./events/pages/CreateEventPage";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/events" element={<EventLists />} exact/>
      <Route path="/event/:id" element={<EventPost />} exact/>
      <Route path="/createEvent" element={<CreateEvent />} exact/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
  );
};

export default App;

// import "./App.css";
// import "./index.css";
// import PaintingMarketplace from "./components/PaintingMarketplace";
// function App() {
//   return <PaintingMarketplace />;
// }

// export default App;
