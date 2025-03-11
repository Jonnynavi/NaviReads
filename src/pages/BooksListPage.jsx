import {useContext} from "react";
import BookContext from "../context/book";
import Rating from "../components/rating";
import { Link } from "react-router";

const BooksListPage = () => {
    const {books} = useContext(BookContext);
    const renderBooks = () => {
        return books.map((book, index) => {
            const {volumeInfo} = book;
            return(
                <div className="book-list-info" key={book.id}>
                    <Link to={`/book/${book.id}`}>
                        <img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`} alt={volumeInfo.title}/>
                        <h2>{volumeInfo.title}</h2>
                    </Link>
                    <div className="author-rating">
                        <h3>{volumeInfo.authors?.[0] || ""}</h3>
                        <Rating />                    
                    </div>
                </div>
            )
        });
    }
    return (
        <div>
            <h1>Book List</h1>
            <div className="book-list">
                {renderBooks()}
            </div>
        </div>
    );
};

export default BooksListPage;