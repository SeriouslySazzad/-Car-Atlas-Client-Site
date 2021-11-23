import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const initialInfo = { name: '', description: '', img: '', price: "" }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);
    const [addProductSuccess, setAddProductSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }

    const handleProductSubmit = data => {
        const product = {
            ...reviewInfo
        }
        console.log(product);
        fetch("https://fathomless-escarpment-30471.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setAddProductSuccess(true);
                }
            })
        data.preventDefault();
    }

    return (
        <div>
            <h1>Please Add a Product</h1>
            <br />
            <form onSubmit={handleProductSubmit}>
                <input
                    type="text"
                    className="form-control "
                    name="name"
                    defaultValue=''
                    onBlur={handleOnBlur}
                    placeholder="Product Name" />
                <br />
                <input
                    type="text"
                    className="form-control "
                    name="description"
                    defaultValue=''
                    onBlur={handleOnBlur}
                    placeholder="Product Description"
                />
                <br />
                <input
                    type="text"
                    className="form-control "
                    name="img"
                    defaultValue=''
                    onBlur={handleOnBlur}
                    placeholder="Product Image URL"
                />
                <br />
                <input
                    type="number"
                    className="form-control "
                    name="price"
                    onBlur={handleOnBlur}
                    defaultValue=''
                    placeholder="Product Price"
                />
                <br />
                <input
                    className="btn btn-success text-left px-5"
                    type="submit"
                    value="Add Product" />
            </form>
            <br />
            {addProductSuccess &&
                <div>
                    <Alert variant="success">
                        Product Addeded Succesfully !!
                    </Alert>
                    <Link to="/home">
                        <button className="btn btn-secondary">Go to Homepage</button>
                    </Link>
                    <br />
                </div>

            }
        </div>
    );
};

export default AddProduct;