import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

const url = "https://openlibrary.org/search.json?q=";

function Provider({children}){
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async (keyWord) => {
        const response = await axios.get(url + `${keyWord}&limit=12&language=eng`);
        setBooks(response.data.docs);
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