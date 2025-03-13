import { useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import BookContext from "../context/book";
import useBookData from "../hooks/fireBase/useBookData";
import BookCover from "../components/BookCover";
import BookInfo from "../components/BookInfo";
import ReviewSection from "../components/ReviewSection";


function BookPage(){
    const {fetchBook, currentBook} = useContext(BookContext);
    const {bookId} = useParams();
    const [loading, setLoading] = useState(true);
    const {fetchReviews, bookReviews, addReview, updateReviewByID} = useBookData(bookId);
    const user = useAuth();

    const fetchNewRating = async() => {
        await fetchBook(bookId);
    }

    useEffect(() => {
        const fetchData = async() => {
            await fetchBook(bookId);
            await fetchReviews(bookId);
            setLoading(false);
        };
        fetchData();
    }, [bookId]);

    if(loading) return <h1>Loading...</h1>;
    
    if(!currentBook) return <h1>Book not found</h1>;

    return(
        <div className="book-page">
            <BookCover bookID={bookId} />
            <div className="book-page-info">
                <BookInfo {...currentBook} />
                <ReviewSection updateReview={updateReviewByID} fetchNewRating={fetchNewRating} user={user} bookReviews={bookReviews} addReview={addReview} bookId={bookId} />
            </div>
        </div>
    );

}

export default BookPage;