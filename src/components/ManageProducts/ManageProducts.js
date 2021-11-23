import React, { useEffect, useState } from 'react';
import { Alert, Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log(data);
            })
    }, [])

    const handleDelete = id => {
        console.log(id);
        fetch(`https://fathomless-escarpment-30471.herokuapp.com/deleteProduct/${id}`, {
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
        <div>
            <h1 className="mb-5">Manage All Products</h1>
            <div className="">
                <Table striped bordered hover responsive variant="dark" className="noWrap">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((pd, index) => (
                                <tr key={pd._id}>
                                    <td>{index+1}</td>
                                    <td>{pd?.name}</td>
                                    <td>$ {pd?.price}</td>
                                    <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td>
                                    <td><button className="btn btn-success">Update</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <br />
                {success &&
                    <Alert variant="success">
                        Product Deleted Successfully !!
                    </Alert>
                }
            </div>
        </div>
    );
};

export default ManageProducts; <h1>Manage Products</h1>