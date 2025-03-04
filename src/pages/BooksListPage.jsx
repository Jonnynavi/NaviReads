import {useContext} from "react";
import BookContext from "../context/book";
import Rating from "../components/rating";

const BooksListPage = () => {
    const {fetchbooks, books} = useContext(BookContext);
    const renderBooks = () => {
        return books.map((book, index) => {
            return(
                <div className="book-info" key={book.key}>
                    <img src={`https://covers.openlibrary.org/a/id/${book.cover_i}-L.jpg`} alt={book.title}/>
                    <h2>{book.title}</h2>
                    <div className="author-rating">
                        <h3>{book.author_name[0]}</h3>
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