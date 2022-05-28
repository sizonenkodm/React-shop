import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { addToBasket = Function.prototype, goods = [] } = props;

    if (!goods.length) {
        <h3>There is nothing</h3>
    }

    return (
        <div className='goods'>
            {goods.map(item => <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />)}
        </div>
    );
};

export default GoodsList;