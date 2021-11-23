import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, name, img, description, price } = props.product;
    return (
        <div className="single-product">
            <img className="mb-4" src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>Price: ${price}</h5>
            <Link to={`/product/${_id}`}>
                <button className="btn btn-success"><i className="fas fa-cart-plus"></i> Buy Now</button>
            </Link>
        </div>
    );
};

export default Product;