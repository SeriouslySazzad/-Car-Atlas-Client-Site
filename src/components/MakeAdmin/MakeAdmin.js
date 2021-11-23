import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fathomless-escarpment-30471.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }  
            })

        e.preventDefault();
    }
    return (
        <div className="App">
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onBlur={handleOnBlur}
                    placeholder="Enter Email" />
                <br />
                <input
                    className="btn btn-success text-left px-5 "
                    type="submit"
                    value="Make Admin" />
            </form>
            <br />
            {success &&
                <div>
                    <Alert variant="success">
                        Made Admin Successfully !!
                    </Alert>
                    <Link to="/home">
                        <button className="btn btn-secondary">Go to Homepage</button>
                    </Link>
                </div>

            }
        </div>
    );
};

export default MakeAdmin;