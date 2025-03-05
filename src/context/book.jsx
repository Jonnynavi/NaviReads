import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

const url = "https://www.googleapis.com/books/v1/volumes";

function Provider({children}){
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    
    const fetchBooks = async (keyWord) => {
        const response = await axios.get(url + `?q=${keyWord}&maxResults=14&startIndex=0`);
        setBooks(response.data.items);
    }

    useEffect(() => {
        fetchBooks("sinister");
    }, []);

    const fetchBook = async (bookId) => {
        const response = await axios.get(`${url}/${bookId}`);
        setCurrentBook(response.data);
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