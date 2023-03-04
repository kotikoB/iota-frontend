import React, { useEffect, useState } from 'react';
import { ItemType } from '../types/Item.types';

interface Props {
    item: ItemType;
    id?: number;
    currentLocation: string;
}

const CnEvent: React.FC<Props> = ({ item, currentLocation }) => {
    return (
        <div className="item-detail">
            <h1>{`Item - ${item.name}`}</h1>
            <h3>Events</h3>
            <p>{`Current location - ${currentLocation}`}</p>
        </div>
    );
};

export default CnEvent;
