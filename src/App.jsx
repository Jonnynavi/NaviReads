import { Routes, Route, useLocation } from "react-router-dom";
import BooksListPage from "./pages/BooksListPage";
import NavBar from "./components/NavBar";
import BookPage from "./pages/BookPage";
import LoginPage from "./pages/LoginPage";
import MyProfilePage from "./pages/MyProfilePage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./main.css";

function App(){
    const location = useLocation();  
    return (
        <div>
            {location.pathname !== "/login" && <NavBar />}
            <Routes>
                <Route path="/" element={<BooksListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/book/:bookId" element={<BookPage />} />

                <Route path="/profile" element={
                    <ProtectedRoutes>
                        <MyProfilePage />
                    </ProtectedRoutes>
                } />
            </Routes>
        </div>
        
    );
}

export default App;