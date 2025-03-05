import { BrowserRouter as Router, Routes, Route } from "react-router";
import BooksListPage from "./pages/BooksListPage";
import NavBar from "./components/NavBar";
import BookPage from "./pages/BookPage";
import "./main.css";
function App(){


    return (
        <div>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<BooksListPage />} />
                    <Route path="/book/:bookId" element={<BookPage />} />
                </Routes>
            </Router>
        </div>
        
    );
}

export default App;