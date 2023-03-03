import React, { useState, useEffect } from 'react';
import './App.css';
import { response } from 'express';
import Loader from './components/Loader';
import Item from './components/Item';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {


    return (
        <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
    );
}

export default App;
