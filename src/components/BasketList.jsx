import React, { useContext } from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

const BasketList = () => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active indigo lighten-1">Basket</li>
            {
                order.length
                    ? order.map(el => (<BasketItem key={el.id} {...el} />))
                    : <li className="collection-item">Basket is empty</li>
            }
            <li
                className="collection-item active indigo lighten-1"
            >
                Total cost: {totalPrice} $
            </li>
            <li
                className="collection-item active indigo lighten-1"
            >
                <button className='btn btn-small'>Place Your Order</button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
};

export default BasketList;