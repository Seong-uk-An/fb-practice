import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";

function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
