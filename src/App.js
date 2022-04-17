import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Rentals from './pages/rentals/Rentals';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
    </Routes>
  );
}

export default App;
