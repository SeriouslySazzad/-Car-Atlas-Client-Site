import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Orders from '../Orders/Orders';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fathomless-escarpment-30471.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(data)
            })
    }, [user.email])

    return (
        <div>
            <h1 className="mt-3 mb-5">Your orders are down below :</h1>

            <div className="orders-container">
                {
                    orders.map(order => <Orders
                        key={order._id}
                        order={order}
                    ></Orders>)
                }
            </div>
            <br />
        </div >
    );
};

export default MyOrders;