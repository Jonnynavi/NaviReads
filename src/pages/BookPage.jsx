import { useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import BookContext from "../context/book";
import Rating from "../components/rating";
import TagBubbles from "../components/TagBubbles";


function BookPage(){
    const {fetchBook, currentBook} = useContext(BookContext);
    const {bookId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            await fetchBook(bookId);
            setLoading(false);
        };
        fetchData();
    }, [bookId]);

    if(loading) return <h1>Loading...</h1>;
    
    if(!currentBook) return <h1>Book not found</h1>;

    const {title, authors, publishedDate, description, industryIdentifiers, categories} = currentBook.volumeInfo;
    
    // Extract genres from categories
    const genres = new Set();
    categories.forEach((category) => {
        category.split(" / ").forEach((genre) => {
            genres.add(genre);
        });
    });

    return(
        <div className="book-page">
            <div className="book-page-cover">
                <img src={`http://books.google.com/books/content?id=${bookId}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt={bookId}/>
                <Rating />
                <p>Rate this book</p>
            </div>
            <div className="book-page-info">
                <h1>{title}</h1>
                <h2>{authors[0]}</h2>
                <div className="book-page-avarage-rating">
                    <Rating /> 
                    <p>Average rating: <span>4.5</span></p>
                </div>
                <div dangerouslySetInnerHTML={{__html: description}} />
                <div><span>Genres:</span> <TagBubbles tags={[...genres]} /></div>
                <p>published: {publishedDate}</p>
                <p>ISBN: {industryIdentifiers[0].identifier}</p>
            </div>
        </div>
    );

}

export default BookPage;