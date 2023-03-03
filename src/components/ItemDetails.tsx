import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import CnEvent from './CnEvent';

const ItemDetails: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState([]);

    interface ItemDetailInterface {
        id: number;
        currentLocation: string;
    }

    useEffect(() => {
        if (isSending) return;
        setIsSending(true);

        let itemId = 3;

        fetch(`http://localhost:3030/items/${itemId}`)
            .then((response) => response.json())
            .then((res) => setEvents(res))
            .catch((err) => setError(err));

        setIsSending(false);
    }, []);

    return (
        <div>
            <h1 className="h1">IOTA - Events</h1>
            {isSending ? <Loader /> : <CnEvent />}
        </div>
    );
};

export default ItemDetails;

// [
//     {
//         "currentLocation": "Nyaribari-Chache",
//         "item": {
//             "name": "Pili",
//             "price": 13,
//             "color": "green",
//             "id": 2
//         },
//         "id": 1
//     }
// ]
