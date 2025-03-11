import { useState } from "react";
import { db } from "../../config/firebase";
import useUserData from "./useUserData";
import { addDoc, collection, deleteDoc, doc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore' ;

const useBookData = () =>{
    const [bookReviews, setBookReviews] = useState([]);
    const { fetchUsername } = useUserData();

    const fetchReviews = async (bookID) => {
        try{
            const q = query(collection(db, "reviews"), where("bookID", "==", bookID));
            const querySnapshot = await getDocs(q);
            const reviews = querySnapshot.docs.map(doc => doc.data());
            const reviewWithUsernames = await Promise.all(
                reviews.map(async (review) => {
                    const username = await fetchUsername(review.userID);
                    return { ...review, username};
                })
            )
            setBookReviews(reviewWithUsernames);
            console.log(reviewWithUsernames);
        } catch (e){
            console.error("Error fetching reviews", e.message);
        }
        
    }

    const addReview = async (userID, bookID, rating, review) => {
        try{
            const reviewRef = await addDoc(collection(db, "reviews"), {
                userID,
                bookID,
                rating,
                review,
                createdAt: Timestamp.fromDate(new Date()),
            });

        fetchReviews(bookID);
        console.log(`Review added with ID: ${reviewRef.id}`);    
        } catch (e){
            console.error("Error adding review", e.message);
        }
    }

    const deleteReviewByID = async (reviewID) =>{
        try{
            const reviewRef = doc(db, "reviews", reviewID);
            await deleteDoc(reviewRef);

            fetchReviews(bookID);
            console.log(`Review ${reviewID} deleted`);
        }catch(e){
            console.error("Error deleting review", e.message);
        }
    }


    const deleteReviewByUserID = async (userID) => {
        try{
            const q = query(collection(db, "reviews"), where("userID", "==", userID));
            const querySnapshot = await getDocs(q);

            querySnapshot.docs.forEach(async (docSnapShot) => {
                const reviewRef = doc(db, "reviews", docSnapShot.id);
                await deleteDoc(reviewRef);
                console.log(`Review ${docSnapShot.id} deleted`);
            });

            fetchReviews(bookID);
        }catch(e){
            console.error("Error deleting reviews", e.message);
        }
    }

    const updateReview = async (reviewID, rating, review) => {
        try{
            const reviewRef = doc(db, "reviews", reviewID);
            await updateDoc(reviewRef, {
                rating,
                review,
            });
            console.log("user Updated successfully!");
        } catch (error){
            console.error("Error updating user:", error.message);
        }
    };

    return {bookReviews, fetchReviews, addReview, deleteReviewByID, deleteReviewByUserID, updateReview};

}

export default useBookData;