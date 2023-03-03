import React from 'react';
import { ItemType } from '../types/Item.types';
import { useNavigate } from 'react-router-dom';

interface Props {
    item: ItemType;
    onClick: () => void;
}

const Item: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate();

    function handleClick() {
  
      navigate('/target-route');
    }


    return <div className="item">{item.name}</div>;
};

export default Item;
