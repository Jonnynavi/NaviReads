import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Review from "./Review";


function ReviewSection({user, bookReviews, addReview, bookId}){
    const [showReviewForm, setShowReviewForm] = useState(false);

    const handleSubmitReview = (rating, review) => {
        addReview(user.uid, bookId, rating, review);
        setShowReviewForm(false);
    }

    const renderReviews = () => {
        return bookReviews.map((review, index) => {
            return(
                <Review review={review} user={user} key={index} />       
            )
        });
    };

    return(
        <div className="book-page-reviews">
            <h1>Reviews</h1>
            {renderReviews()}
            <div className="review">
                <div>
                    {user && !showReviewForm && <button onClick={() => setShowReviewForm(true)}>Write a review</button>}
                    {showReviewForm && <ReviewForm onEnter={handleSubmitReview}/>}
                </div>
            </div> 
        </div>
    )
}

export default ReviewSection;