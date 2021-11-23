import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Orders.css';

const Orders = (props) => {
    const { _id, name, phone, price, displayName } = props.order;
    const [success, setSuccess] = useState(false);

    const handleDelete = id => {
        alert("You want to cancel to order?")
        console.log(id);
        fetch(`https://fathomless-escarpment-30471.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setSuccess(true);
                }
            })
    }
    return (
        <div className="">
            <div className="single-order">
                <p>Customer: {displayName}</p>
                <p>Phone: {phone}</p>
                <p>Car: {name}</p>
                <p>Price: ${price}</p>
                <button onClick={() => handleDelete(_id)} className="btn btn-danger me-3">Cancel Order</button>
                
            </div>
            <br />
            {success &&
                <Alert variant="success">
                    Order Canceled Successfully !!
                </Alert>
            }
        </div>
    );
};

export default Orders;