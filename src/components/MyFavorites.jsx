import useUserData from "../hooks/fireBase/useUserData";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import BookContext from "../context/book";
import { Link } from "react-router-dom";
function MyFavorites() {
  const user = useAuth();
  const {fetchBook} = useContext(BookContext);
  const {favorites} = useUserData(user.uid, fetchBook);

  console.log(favorites);
  
  const renderFavorites = () => {
    return favorites.map((favorite, index) => {
      return (
        <div key={index} >
          <Link to={`/book/${favorite}`}><img src={`https://books.google.com/books/content?id=${favorite}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt="book pic"/></Link>
        </div>
        
      )
    });
  };

  return (
    <div className="my-favorites">
      {renderFavorites()}
    </div>
  );
}

export default MyFavorites;