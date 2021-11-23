import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div className="login">
            <div className="login-container">
                <div className="container">
                    <br />
                    <form onSubmit={handleLoginSubmit}>
                        <h2 className="mt-3 text-center"><i className="fas fa-sign-in-alt"></i>  Please Login with Email and Password</h2>
                        <br />
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><i className="far fa-envelope"></i> Your Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control bg-secondary text-white"
                                    id="inputEmail3"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Your Email"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><i className="fas fa-key"></i> Your Password</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control bg-secondary text-white"
                                    id="inputPassword3"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Your Password"
                                    required />
                            </div>
                        </div>
                        <div className="p-3">
                            <input
                                className="btn btn-success text-left px-5"
                                type="submit"
                                value="Login" />
                            <Link to="/register">
                                <button className="btn btn-primary ms-3 px-5">New User? Please Register.</button>
                            </Link>
                        </div>
                    </form>
                    <br />
                    {isLoading &&
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                    {user?.email &&
                        <Alert variant="success">
                            Successfully Logged In !!
                        </Alert>
                    }
                    {authError &&
                        <Alert variant="danger">
                            {authError}
                        </Alert>
                    }
                    <br />
                    <hr />
                    <hr />
                    <br />
                    <div className="App">
                        <button onClick={handleGoogleSignIn} className="btn btn-danger me-4"><i className="fab fa-google"></i> Sign In With Google Account</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;