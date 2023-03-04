import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import CnEvent from './CnEvent';
import { ItemType } from '../types/Item.types';

const ItemDetails: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState([]);

    interface EventInterface {
        id: number;
        currentLocation: string;
        item: ItemType
    }

    useEffect(() => {
        if (isSending) return;
        setIsSending(true);

        let itemId = 2;

        fetch(`http://localhost:3030/events/${itemId}`)
            .then((response) => response.json())
            .then((res) => setEvents(res))
            .catch((err) => setError(err));

        setIsSending(false);
    }, []);

    return (
        <div>
            <h1 className="h1">IOTA - Events</h1>
            {events.length < 1 ? <Loader /> : events.map<any>((evnt: EventInterface) => <CnEvent item={evnt.item} currentLocation={evnt.currentLocation} />)}
        </div>
    );
};

export default ItemDetails;
