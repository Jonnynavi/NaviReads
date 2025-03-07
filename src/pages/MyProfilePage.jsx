import MyFavorites from "../components/MyFavorites";
import MyReviews from "../components/MyReviews";

function MyProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      <p>My profile page content</p>
      <MyFavorites />
      <MyReviews />
    </div>
  );
}

export default MyProfilePage;