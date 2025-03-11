import Rating from "./rating";

function BookCover({ bookID }){
    return (
        <div className="book-page-cover">
            <img src={`http://books.google.com/books/content?id=${bookID}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt={bookID}/>
            <Rating active/>
            <p>Rate this book</p>
        </div>
    )
}

export default BookCover;