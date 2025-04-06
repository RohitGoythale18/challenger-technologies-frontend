import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Accessories from './components/Accessories';
import Home from './pages/Home';
import Smartphones from './pages/Smartphones';
import Footer from './components/Footer';
import Headphones from './pages/Headphones';
import Apple from './pages/Apple';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Accessories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones" element={<Smartphones />} />

        <Route path="/headphones" element={<Headphones />} />
        <Route path="/iphones" element={<Apple />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;