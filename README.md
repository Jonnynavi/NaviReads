# Navi-Reads

## Overview
[Navi-Reads](https://navireads.web.app/) is a book review and rating platform that integrates with Firebase Authentication, Firestore, and the Google Books API. Users can sign in, search for books, leave reviews, rate books, and manage their favorite books. Each book displays an average star rating based on user reviews. Users can also edit their past reviews and view all their contributions in their profile.

## Features
- **User Authentication**: Secure login and account management via Firebase Authentication.
- **Google Books API Integration**: Fetches book details dynamically.
- **User Profiles**: Displays all reviews and favorite books of a user.
- **Book Reviews & Ratings**: Users can review books, assign ratings, and edit their reviews.
- **Favorite Books**: Users can add books to their favorites list.
- **Protected Routes**: Ensures only authenticated users can access specific pages.

## Live Site
🔗 [Navi-Reads](https://navireads.web.app/)

## File Structure
```sh
navi-reads/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── BookCover.jsx
│   │   ├── BookInfo.jsx
│   │   ├── MyFavorites.jsx
│   │   ├── MyReviews.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProtectedRoutes.jsx
│   │   ├── Rating.jsx
│   │   ├── Review.jsx
│   │   ├── ReviewForm.jsx
│   │   ├── ReviewSection.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TagBubbles.jsx
│   ├── config/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── book.jsx
│   ├── hooks/
│   │   ├── firebase/
│   │   │   ├── useBookData.jsx
│   │   │   ├── useUserData.jsx
│   ├── pages/
│   │   ├── BookPage.jsx
│   │   ├── BooksListPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MyProfilePage.jsx
│   ├── services/
│   │   ├── AuthService.jsx
│   ├── App.jsx
│   ├── main.css
│   ├── main.jsx
## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/navi-reads.git
cd navi-reads
2. Install Dependencies
sh
Copy code
npm install
3. Set Up Firebase
Create a Firebase project in the Firebase Console.
Enable Authentication (Email/Google Sign-In).
Set up Firestore Database.
Configure Firebase in src/config/firebase.js:
js
Copy code
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
4. Run the App Locally
sh
Copy code
npm run dev
Deployment
You can deploy Navi-Reads using Firebase Hosting:

sh
Copy code
npm install -g firebase-tools
firebase login
firebase init
firebase deploy