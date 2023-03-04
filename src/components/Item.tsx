import React from 'react';
import { ItemType } from '../types/Item.types';
import { useNavigate } from 'react-router-dom';

interface Props {
    item: ItemType;
    itemId: number;
}

const Item: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/item-details', { state: { item } });
    }

    return (
        <div className="item" onClick={handleClick}>
            {item.name}
        </div>
    );
};

export default Item;
