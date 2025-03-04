import BooksListPage from "./pages/BooksListPage";
import NavBar from "./components/NavBar";
import "./main.css";
function App(){


    return (
        <div>
            <NavBar />
            <BooksListPage/>
        </div>
    );
}

export default App;