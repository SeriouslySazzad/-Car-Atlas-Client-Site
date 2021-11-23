import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="">
            <div>
                <h1>Payment System Coming Soon !!</h1>
                <br />
                <Link to="/home">
                    <Button className="btn btn-success"><i className="fas fa-home"></i> Click Here to Go Homepage</Button>
                </Link>
            </div>
            <br />
        </div>
    );
};

export default Payment;