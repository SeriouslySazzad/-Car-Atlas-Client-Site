import React, { useState, useEffect } from 'react';
import Footer from '../Home/Footer/Footer';
import Product from '../Home/Products/Product/Product';



const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="explore">
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;