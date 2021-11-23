import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';
import './Review.css';

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-escarpment-30471.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
                // console.log(data);
            })
    }, [])

    return (
        <div style={{background: 'wheat', padding: '30px'}}>
            <div>
                <div id="review" className="mb-5">
                    <h1 style={{fontWeight: '700'}} className="mb-5">Customers Review</h1>
                    <div className="review-container container">
                        {
                            review.map(rv => <SingleReview
                                key={rv._id}
                                rv={rv}
                            ></SingleReview>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;