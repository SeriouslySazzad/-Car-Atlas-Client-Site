import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import './ProductDetails.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { user } = useAuth();
    const initialInfo = { displayName: user.displayName, email: user.email, phone: '', status: 'Pending' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const [orderSuccess, setOrderSUccess] = useState(false);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = data => {
        // collect data
        const order = {
            ...orderInfo,
            name: product?.name,
            description: product?.description,
            price: product?.price,
        }
        // send data to database
        console.log(order);

        fetch("https://fathomless-escarpment-30471.herokuapp.com/addOrders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSUccess(true);
                }
            })
        data.preventDefault();
    }

    useEffect(() => {
        fetch(`https://fathomless-escarpment-30471.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    return (
        <div className="details">
            <div className="container p-5">
                <div className="product-details">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" src={product?.img} alt="" />
                            <h3>{product?.name}</h3>
                            <p>{product?.description}</p>
                            <h5>Price: ${product?.price}</h5>
                            
                            <Link to="/">
                                <button className="btn btn-success mb-2"><i className="fas fa-home"></i> Go Home</button>
                            </Link>
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <h1>Place Your Order</h1>
                            <form onSubmit={handleOrderSubmit}>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={product?.name}
                                    placeholder="Product Name" />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    defaultValue={product?.description}
                                    placeholder="Product Description" />
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={product?.price}
                                    placeholder="Product Price" />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="displayName"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    placeholder="Enter Your Name"
                                />
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email}
                                    placeholder="Enter Your Email"
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    onBlur={handleOnBlur}
                                    defaultValue=''
                                    placeholder="Phone Number"
                                />
                                <input
                                    className="btn btn-success text-left px-5"
                                    type="submit"
                                    value="Place Your Order" />
                            </form>
                            {orderSuccess && <Alert variant="success">
                                Order Placed Successfully !!
                            </Alert>}
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;