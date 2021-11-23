import React from 'react';
import './SingleReview.css';
import Rating from 'react-rating';

const SingleReview = (props) => {
    const { name, rating, comment } = props.rv;
    return (
        <div className="review p-3">
            <h4 className="">{name}</h4>
            <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
            <h5 className="mt-3">{comment}</h5>
        </div>
    );
};

export default SingleReview;