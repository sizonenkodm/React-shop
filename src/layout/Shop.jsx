import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';

import Preloader from '../components/Preloader';
import GoodsList from '../components/GoodsList';
import Cart from '../components/Cart';
import BasketList from '../components/BasketList';
import Alert from '../components/Alert';

const Shop = () => {

    const {
        loading,
        order,
        isBasketShow,
        alertName,
        setGoods,
        handleBasketShow
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <main className="container content">
        <Cart quantity={order.length} />
        {
            loading ? <Preloader /> : <GoodsList />
        }
        {
            isBasketShow && (
                <div
                    className='content modal'
                    onClick={(event) => {
                        if (event.target.classList.contains('modal')) {
                            handleBasketShow();
                        }
                    }}
                >
                    <BasketList />
                </div>
            )
        }
        {
            alertName && <Alert />
        }
    </main>;
};

export default Shop;
