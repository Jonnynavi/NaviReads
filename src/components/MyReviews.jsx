import useUserData from "../hooks/fireBase/useUserData";
import { useAuth } from "../context/AuthContext";
import Rating from "./rating";
import { Link } from "react-router-dom";

function myReviews() {
  const user = useAuth();
  const {myReviews} = useUserData(user.uid);

  const renderMyReviews = () => {
    return myReviews.map((review, index) => {
      return (
          <div key={index} className="review">
            <Link to={`/book/${review.bookID}`}><img src={`https://books.google.com/books/content?id=${review.bookID}&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api`} /></Link>            
            <Rating rating={review.rating} />
            <p>{review.review}</p>
          </div>
      )
    })
  }

  return (
    <div className="my-Reviews">
      {renderMyReviews()}
    </div>
  );
}

export default myReviews;