import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, comment: "", rating: "" }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);
    const [reviewSuccess, setReviewSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }

    const handleReviewSubmit = data => {
        const review = {
            ...reviewInfo
        }
        console.log(review);
        fetch("https://fathomless-escarpment-30471.herokuapp.com/addReview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setReviewSuccess(true);
                }
            })
        data.preventDefault();
    }

    return (
        <div className="App">
            <h1>Review Our Service</h1>
            <br />
            <form onSubmit={handleReviewSubmit}>
                <input
                    type="text"
                    className="form-control "
                    name="name"
                    defaultValue={user.displayName}
                    placeholder="Your Name" />
                <br />
                <input
                    type="email"
                    className="form-control "
                    name="email"
                    defaultValue={user.email}
                    placeholder="Your Email"
                />
                <br />
                <textarea
                    type="text"
                    className="form-control "
                    name="comment"
                    onBlur={handleOnBlur}
                    defaultValue=''
                    placeholder="Your Comment"
                />
                <br />
                <input
                    type="number"
                    className="form-control "
                    name="rating"
                    onBlur={handleOnBlur}
                    defaultValue=""
                    placeholder="Rate our product out of 5" />
                <br />
                <input
                    className="btn btn-success text-left px-5"
                    type="submit"
                    value="Submit Your Review" />
            </form>
            <br />
            {reviewSuccess &&
                <div>
                    <Alert variant="success">
                        Thanks for your valuable comment. Stay with us.
                    </Alert>
                    <Link to="/home">
                        <button className="btn btn-secondary"><i className="fas fa-home"></i> Go to Homepage</button>
                    </Link>
                    
                </div>

            }
            <br />
        </div>
    );
};

export default Review;