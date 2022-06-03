import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';


const Alert = () => {
    const {
        alertName = '',
        closeAlert = Function.prototype
    } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [alertName]);

    return (
        <div id='toast-container'>
            <div className='toast'>{alertName} was added to basket</div>
        </div>
    );
};

export default Alert;