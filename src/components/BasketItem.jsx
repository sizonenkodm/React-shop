import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;
    return (
        <li className="collection-item">
            {name} x{quantity} = {price * quantity}
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