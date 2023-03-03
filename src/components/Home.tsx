import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Item from './Item';

const Home: React.FC = () => {
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
        <div>
            <h1 className="h1">IOTA</h1>
            {items.length > 0 ? (
                items.map<any>((item: ItemInterface) => <Item item={item} onClick={() => console.log('clicked')} />)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Home;
