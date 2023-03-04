import React, { useEffect, useState } from 'react';
import { ItemType } from '../types/Item.types';

interface Props {
    item: ItemType;
    id?: number;
    currentLocation: string;
}

const CnEvent: React.FC<Props> = ({ item, currentLocation }) => {
    return <div className="item">{`Item - ${item.name}, Current location - ${currentLocation}`}</div>;
};

export default CnEvent;
