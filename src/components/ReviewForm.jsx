import Rating from "../components/rating";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function ReviewForm({onEnter, reviewDesc, oldRating}){
    const [rating, setRating] = useState(oldRating);
    const [review, setReview] = useState(reviewDesc || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onEnter(rating, review);
    }

    return(   
            <form className="review-form" onSubmit={handleSubmit}>
                <label>Rating</label>
                <Rating active rating={rating} handleRating={setRating}/>
                <label>Review</label>
                <textarea value={review} onChange={(e) => setReview(e.target.value)} />
                <button>Submit Review</button>
            </form>
    )
}

export default ReviewForm;