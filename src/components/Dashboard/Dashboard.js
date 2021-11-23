import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AllProduts from '../AllProduts/AllProduts';
import Footer from '../Home/Footer/Footer';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout, user } = useAuth();
    return (
        <div>
            <div className="dashboard-container">
                <div className="row">
                    <div className="dashboard-left col-md-3">
                        <div className="mt-4">
                            <Link to="/dashboard">
                                <h1 className="text-light">Dashboard</h1>
                            </Link>
                            <hr />
                            <hr />

                            {
                                admin &&
                                <div>
                                    <Link to={`${url}/manageAllOrders`}>
                                        <li className="dashboard-menu">Manage All Orders</li>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu">Add Product</li>
                                    </Link>
                                    <Link to={`${url}/manageProducts`}>
                                        <li className="dashboard-menu">Manage Products</li>
                                    </Link>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                </div>
                            }

                            {
                                !admin &&
                                <div>
                                    <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu">My Orders</li>
                                    </Link>
                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu">Review</li>
                                    </Link>
                                    <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu">Payment</li>
                                    </Link>
                                </div>
                            }
                            {
                                user.email &&
                                <button onClick={logout} className="btn btn-danger">Logout <i className="fas fa-sign-out-alt"></i></button>
                            }
                            <hr />
                            <hr />
                        </div>
                    </div>

                    <div className="dashboard-right col-md-9">
                        <div className="mt-4 container">
                            <Switch>
                                <Route exact path={`${path}`}>
                                    <AllProduts></AllProduts>
                                </Route>
                                <AdminRoute exact path={`${path}/addProduct`}>
                                    <AddProduct></AddProduct>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/manageProducts`}>
                                    <ManageProducts></ManageProducts>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/manageAllOrders`}>
                                    <ManageAllOrder></ManageAllOrder>
                                </AdminRoute>

                                <Route exact path={`${path}/myOrders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route exact path={`${path}/review`}>
                                    <Review></Review>
                                </Route>
                                <Route exact path={`${path}/payment`}>
                                    <Payment></Payment>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;