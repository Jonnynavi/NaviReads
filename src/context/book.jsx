import { createContext, useState, useEffect } from "react";
import useBookData from "../hooks/fireBase/useBookData";
import axios from "axios";

const BookContext = createContext();

const url = "https://www.googleapis.com/books/v1/volumes";

function Provider({children}){
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const { getAvgRating } = useBookData();
    
    const fetchBooks = async (keyWord) => {
        const response = await axios.get(url + `?q=${keyWord}&maxResults=24&startIndex=0`);
        const bookWithRating = await Promise.all(
            response.data.items.map( async (book) => {
                const avgRating = await getAvgRating(book.id);
                return {...book, avgRating}
            })
        );

        setBooks(bookWithRating);
    }

    useEffect(() => {
        fetchBooks("sinister");
    }, []);

    const fetchBook = async (bookId) => {
        const response = await axios.get(`${url}/${bookId}`);
        const avgRating = await getAvgRating(bookId); 
        console.log(avgRating);
        setCurrentBook({...response.data.volumeInfo, "id": bookId, avgRating});
    }


    const valueToShare = {
        books,
        fetchBooks,
        currentBook,
        fetchBook
    }

    return(
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}

export{ Provider };
export default BookContext;