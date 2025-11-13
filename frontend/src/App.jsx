import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Success from './Pages/Success.jsx'; // <--- 1. IMPORT THE NEW COMPONENT
import NotFound from './Pages/Notfound.jsx';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} /> {/* <--- 2. ADD THE NEW ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;