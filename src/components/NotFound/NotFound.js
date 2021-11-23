import React from 'react';
import { Link } from 'react-router-dom';
// import notFound from './images/404.jpg';

const NotFound = () => {
    return (
        <div className="App bg-secondary p-5">
            {/* <img src={notFound} alt="" className="rounded-2" /> */}
            <h3 className="text-uppercase mt-4 text-warning container">The page you entered in not available. The url you wrote is not available in this site. Please enter the correct url to get the services from us. We will provide you best service.  </h3>
            <h1 className="text-light">THANK YOU SIR!</h1>
            <br />
            <Link to="/home">
                <button className="btn btn-primary">Click Here to go Homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;