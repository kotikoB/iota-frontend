import React from 'react';
import { ItemType } from '../types/Item.types';

interface Props {
    item: ItemType;
    onClick: () => void;
}

const Item: React.FC<Props> = ({ item, onClick }) => {
    return (
        <div className="item" onClick={onClick}>
            {item.name}
        </div>
    );
};

export default Item;
