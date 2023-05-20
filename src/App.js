import React, { useState, useCallback } from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import EventLists from "./events/pages/EventListsPage";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/events" element={<EventLists />} />
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
