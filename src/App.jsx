import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Accessories from './components/Accessories';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Accessories />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;