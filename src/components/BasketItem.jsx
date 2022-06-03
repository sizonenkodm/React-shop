import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return (
        <li className="collection-item">
            {name} {(quantity > 1) ? price : null}x{quantity} = {price * quantity}
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
            <span className='secondary-content'>
                <button
                    className='btn-quantity'
                    onClick={() => decQuantity({
                        id,
                        quantity
                    })
                    }
                >
                    <b>-</b>
                </button>
                <span style={{ margin: '0 0.5rem', color: '#000' }}>{quantity}</span>
                <button
                    className='btn-quantity'
                    onClick={() => incQuantity({
                        id,
                        quantity
                    })}
                >
                    <b>+</b>
                </button>
            </span>
        </li >
    );
};

export default BasketItem;