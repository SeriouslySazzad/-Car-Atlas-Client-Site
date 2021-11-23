import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [success, setSuccess] = useState(false);
    const [statusSuccess, setStatusSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(data);
            })
    }, [])

    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://fathomless-escarpment-30471.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.matchedCount) {
                    setStatusSuccess(true);
                }
            });
    };

    // delete order
    const handleDelete = id => {
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
        <div>
            <h1 className="mt-3 mb-5">Manage All Orders</h1>
            <div className="">
                <Table striped bordered hover responsive variant="dark" className="noWrap">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Car Name</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((pd, index) => (
                                <tr key={pd._id}>
                                    <td>{index + 1}</td>
                                    <td>{pd?.displayName}</td>
                                    <td>{pd?.phone}</td>
                                    <td>{pd?.name}</td>
                                    <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td>
                                    <td>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <select
                                                onClick={() => handleOrderId(pd?._id)}
                                                {...register("status")}
                                            >
                                                <option value={pd.status}>{pd.status}</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Rejected">Rejected</option>
                                            </select>
                                            <input className=" btn btn-info ms-3" type="submit" />
                                        </form>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                {statusSuccess &&
                    <Alert variant="success">
                        Status Updated Successfully !!
                    </Alert>
                }
                <br />
                {success &&
                    <Alert variant="success">
                        Order Deleted Successfully !!
                    </Alert>
                }
            </div>
            <br />
        </div>
    );
};

export default ManageAllOrder;