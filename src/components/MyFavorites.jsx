import useUserData from "../hooks/fireBase/useUserData";
import { useAuth } from "../context/AuthContext";
function MyFavorites() {
  const user = useAuth();
  const {favorites} = useUserData(user.uid);

  const renderFavorites = () => {
    return favorites.map((favorite, index) => {
      return (
        <div key={index} >
          <img src={`https://books.google.com/books/content?id=${favorite}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`} alt="book pic"/>
        </div>
        
      )
    });
  };

  return (
    <div>
      <h1>My Favorites</h1>
      {renderFavorites()}
    </div>
  );
}

export default MyFavorites;