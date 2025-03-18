import Rating from "./rating";
import { useEffect, useState } from "react";

function BookCover({ bookID, addFavoriteBook, favorites}){
    const [showFavorite, setShowFavorite] = useState(false);

    useEffect(() => {
        if (!favorites.includes(bookID)){
            setShowFavorite(true);
        }
    }, []);

    const handleClick = () => {
        addFavoriteBook();
        setShowFavorite(false);
    }

    return (
        <div className="book-page-cover">
            <img src={`https://books.google.com/books/content?id=${bookID}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt={bookID}/>
            {/* <Rating active rating={currentBookReview}/>
            <p>Rate this book</p> */}
            {showFavorite && <h4 onClick={handleClick}>Add to Favorites</h4>}
        </div>
    )
}

export default BookCover;