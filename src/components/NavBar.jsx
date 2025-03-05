import SearchBar from './SearchBar';
import BookContext from "../context/book";
import { useContext } from "react";
import { useNavigate, Link } from 'react-router';

function NavBar(){
    const {fetchBooks} = useContext(BookContext);
    const navigate = useNavigate();
    const handleSearch = (term) => {
        fetchBooks(term);
        navigate('/');
    }
    return(
        <div>
            <div className="nav-bar">
                <div className="logo"><img src='/logo.jpg' /></div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">My Reviews</a></li>
                    <li><SearchBar onSearch={handleSearch} /></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;