import MyFavorites from "../components/MyFavorites";
import MyReviews from "../components/MyReviews";

function MyProfilePage() {
  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <h1>My Favorites</h1>
      <MyFavorites />
      <h1>My Reviews</h1>
      <MyReviews />
    </div>
  );
}

export default MyProfilePage;