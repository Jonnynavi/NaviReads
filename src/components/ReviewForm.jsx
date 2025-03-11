import Rating from "../components/rating";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function ReviewForm({onEnter}){
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onEnter(rating, review);
    }
    
    return(   
        <div>
            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <Rating active rating={rating} handleRating={setRating}/>
                <label>Review</label>
                <input value={review} onChange={(e) => setReview(e.target.value)} />
                <button>Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;