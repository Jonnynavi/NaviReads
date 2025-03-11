function Review({review, user, key}){
    return(
        <div key={key} className="review">
            <div>{review.username}</div>
            <div>
                <div>{review.rating}</div>
                <p>{review.review}</p>
            </div>
            {review.userID === user.uid && <button onClick={() => setShowEditForm(true)}>Edit Review</button>}
        </div>     
    )
}

export default Review;