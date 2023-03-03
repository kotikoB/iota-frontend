import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import CnEvent from './Event';

const ItemDetails: React.FC = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState([]);

    interface ItemDetailInterface {
        id: number;
        name: string;
    }

    useEffect(() => {
        fetch('http://localhost:3030/items')
            .then((response) => response.json())
            .then((res) => setItems(res))
            .catch((err) => setError(err));
    }, []);

    return (
        <div>
            <h1 className="h1">IOTA - Events</h1>
            <CnEvent />
        </div>
    );
};

export default ItemDetails;
