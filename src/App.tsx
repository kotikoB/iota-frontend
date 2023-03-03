import React, { useState, useEffect } from 'react';
import './App.css';
import { response } from 'express';
import Loader from './components/Loader';
import Item from './components/Item';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item-details" element={<ItemDetails />} />
            </Routes>
        </div>
    );
}

export default App;
