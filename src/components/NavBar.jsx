import SearchBar from './SearchBar';
import BookContext from "../context/book";
import { useContext } from "react";

function NavBar(){
    const {fetchBooks} = useContext(BookContext);
    const handleSearch = (term) => {
        console.log(term);
        fetchBooks(term);
    }
    return(
        <div>
            <div className="nav-bar">
                <div className="logo"><img src='../../public/logo.jpg' /></div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Reviews</a></li>
                    <li><SearchBar onSearch={handleSearch} /></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;