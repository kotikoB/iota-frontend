import React, { useState, useEffect } from 'react';
import './App.css';
import { response } from 'express';
import Loader from './components/Loader';
import Item from './components/Item';

function App() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState([]);

    interface ItemInterface {
        id: number;
        name: string;
        price: number;
        color: string;
    }

    useEffect(() => {
        fetch('http://localhost:3030/items')
            .then((response) => response.json())
            .then((res) => setItems(res))
            .catch((err) => setError(err));
    }, []);
    return (
        <div className="App">
            {items.length > 0 ? items.map<any>((item: ItemInterface) => <Item item={item} />) : <Loader />}
        </div>
    );
}

export default App;
