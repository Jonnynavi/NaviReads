import { useNavigate, useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import BookContext from "../context/book";
import useBookData from "../hooks/fireBase/useBookData";
import useUserData from "../hooks/fireBase/useUserData";
import BookCover from "../components/BookCover";
import BookInfo from "../components/BookInfo";
import ReviewSection from "../components/ReviewSection";


function BookPage(){
    const {fetchBook, currentBook, fetchBooks, keyWord} = useContext(BookContext);
    const user = useAuth();
    const navigate = useNavigate();
    const {addFavorite, favorites} = useUserData(user?.uid);
    const {bookId} = useParams();
    const [loading, setLoading] = useState(true);
    const {fetchReviews, bookReviews, addReview, updateReviewByID} = useBookData(bookId);

    const fetchNewRating = async() => {
        await fetchBook(bookId);
        await fetchBooks(keyWord);
    }

    const addFavoriteBook = () => {
        if(!user){
            navigate("/login")
            return
        }
        addFavorite(user.uid, bookId);
        fetchBook(bookId);
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
            <BookCover bookID={bookId} addFavoriteBook={addFavoriteBook} user={user} favorites={favorites} />
            <div className="book-page-info">
                <BookInfo {...currentBook} />
                <ReviewSection updateReview={updateReviewByID} fetchNewRating={fetchNewRating} user={user} bookReviews={bookReviews} addReview={addReview} bookId={bookId} />
            </div>
        </div>
    );

}

export default BookPage;