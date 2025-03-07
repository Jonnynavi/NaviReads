import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, query, Timestamp, where } from 'firebase/firestore' ;

const useBookData = (bookID) =>{
    const [bookReviews, setBookReviews] = useState([]);
    

    const fetchReviews = async (bookID) => {
        try{
            const q = query(collection(db, "reviews"), where("bookID", "==", bookID));
            const querySnapshot = await getDocs(q);
            const review = querySnapshot.docs.map(doc => doc.data());
            setBookReviews(review);
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

    return {bookReviews, fetchReviews, addReview, deleteReviewByID, deleteReviewByUserID};

}

export default useBookData;