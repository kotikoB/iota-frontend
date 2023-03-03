import React from 'react';
import { ItemType } from '../types/Item.types';

interface Props {
    item: ItemType;
    onClick: () => void;
}

const Item: React.FC<Props> = ({ item }) => {
    return <div className="item">{item.name}</div>;
};

export default Item;
