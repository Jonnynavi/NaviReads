import { useState } from "react";
import Rating from "./rating";
import ReviewForm from "./ReviewForm";


function Review({review, user, updateReview}){
    const [ShowEditForm, setShowEditForm] = useState(false);

    const handleUpdate = (newRating, newReview) => {
        updateReview(review.id, newRating, newReview);
        setShowEditForm(false);
    }
    const renderReview = (
        <div>
            <div>{review.username}</div>
            <div>
                <Rating rating={review.rating} />
                <p>{review.review}</p>
            </div>
            {review.userID === user.uid && <button onClick={() => setShowEditForm(true)}>Edit Review</button>}
        </div>
    );
    
    return(
        <div className="review">
            {!ShowEditForm ? renderReview : <ReviewForm onEnter={handleUpdate} oldRating={review.rating} reviewDesc={review.review} />}
        </div>     
    )
}

export default Review;