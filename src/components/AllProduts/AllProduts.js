import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

const AllProduts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h1 className="mb-4">Our Exclusive Products</h1>
            <div className="orders-container">
                {
                    products.map(pd => <Product
                        key={pd._id}
                        pd={pd}
                    ></Product>)
                }
            </div>
            <Link to="/">
                <button className="btn btn-success mt-3 mb-3"><i className="fas fa-home"></i> Click Here to Go Homepage</button>
            </Link>
            <br />
        </div>
    );
};

export default AllProduts;