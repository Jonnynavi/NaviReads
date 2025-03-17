import Rating from "./rating";

function BookCover({ bookID, addFavoriteBook}){
    return (
        <div className="book-page-cover">
            <img src={`https://books.google.com/books/content?id=${bookID}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt={bookID}/>
            {/* <Rating active rating={currentBookReview}/>
            <p>Rate this book</p> */}
            <h4 onClick={addFavoriteBook}>Add to Favorites</h4>
        </div>
    )
}

export default BookCover;