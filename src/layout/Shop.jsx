import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from '../components/Preloader';
import GoodsList from '../components/GoodsList';
import Cart from '../components/Cart';
import BasketList from '../components/BasketList';
import Alert from '../components/Alert';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
            setAlertName(item.name);
        } else {
            return order;
        }
    }

    const removeFromBasket = (ItemId) => {
        const newOrder = order.filter(el => el.id !== ItemId);
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const incQuantity = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id);
        const newOrder = order.map((el, i) => {
            if (i === itemIndex) {
                return {
                    ...el,
                    quantity: el.quantity + 1
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decQuantity = (item) => {
        if (item.quantity === 1) {
            return order;
        } else {
            const itemIndex = order.findIndex(el => el.id === item.id);
            const newOrder = order.map((el, i) => {
                if (i === itemIndex) {
                    return {
                        ...el,
                        quantity: el.quantity - 1
                    };
                } else {
                    return el;
                }
            });
            setOrder(newOrder);
        }
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {
            loading ? (
                <Preloader />) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )
        }
        {
            isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )
        }
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert} />
        }
    </main>;
};

export default Shop;
