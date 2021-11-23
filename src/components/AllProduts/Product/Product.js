import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Product = (props) => {
    const { _id, name, img, price, description } = props.pd;
    const { admin } = useAuth()
    return (
        <div className="single-order p-2">
            <img style={{height: '200px'}} className="w-75 mb-4" src={img} alt="" />
            <p>{name}</p>
            <p>Car: {description}</p>
            <p>Price: ${price}</p>
            {!admin &&
                <Link to={`/product/${_id}`}>
                    <button className="btn btn-success me-4">Order Now</button>
                </Link>}
            <button className="btn btn-danger me-3">Read More <i className="fas fa-arrow-circle-right"></i> <i className="fas fa-arrow-circle-right"></i></button>
        </div>
    );
};

export default Product;