import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <div className="products-section">
            <div className="container py-5">
                <h1 style={{ fontWeight: '700', fontSize: '40px', marginBottom: '40px' }}>Our Products</h1>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Products;