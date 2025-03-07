import SearchBar from './SearchBar';
import BookContext from '../context/book';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { logOut } from '../services/AuthService';

function NavBar(){
    const {fetchBooks} = useContext(BookContext);
    const navigate = useNavigate();
    const user = useAuth();
    const handleClick = () => {
        logOut();
    }

    const handleSearch = (term) => {
        fetchBooks(term);
        navigate('/');
    }
    return(
            <div className="nav-bar">
                <div className="logo"><img src='/logo.jpg' /></div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li>{user ? <Link to="/profile">My Profile</Link> : <Link to="/login">Login</Link>}</li>
                    <li>{user ? <Link onClick={handleClick} to="/">Sign Out</Link> : ""}</li>
                    <li><SearchBar onSearch={handleSearch} /></li>
                </ul>
            </div>
    );
}

export default NavBar;