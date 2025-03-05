import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

const url = "https://www.googleapis.com/books/v1/volumes?";

function Provider({children}){
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async (keyWord) => {
        const response = await axios.get(url + `q=${keyWord}&maxResults=14&startIndex=0`);
        setBooks(response.data.items);
    }

    useEffect(() => {
        fetchBooks("sinister");
    }, []);


    const valueToShare = {
        books,
        fetchBooks
    }

    return(
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}

export{ Provider };
export default BookContext;