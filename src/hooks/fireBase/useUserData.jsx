import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, getDoc, doc, setDoc, collection, deleteDoc, updateDoc, query, Timestamp, where, arrayUnion } from 'firebase/firestore';

const useUserData = (userId) => {

    const [favorites, setFavorites] = useState([]);
    const [myReviews, setMyReviews] = useState([]);

    
    useEffect(() => {
        const getFavorites = async () => {
            const data = await fetchFavorites(userId);
            setFavorites(data || []);
        }

        const getAllReviews = async () => {
            const data = await fetchAllUserReviews(userId);
            console.log()
            setMyReviews(data || []);
        }

        if(userId){
            getAllReviews();
            getFavorites();    
        }
        
    }, [userId]);
 
    const fetchUsername = async (userID) => {
        try{
            const userRef = doc(db, "users", userID);
            const userSnap = await getDoc(userRef);
            if(userSnap.exists()) {
                return userSnap.data().username;
            }else{
                return null;
            }
        }catch (e){
            console.error("Error fetching user data", e.message);
        }
    }

    const addUser = async (userID, username) => {
        try{
            const userRef = doc(db, "users", userID);
            
            await setDoc(userRef, {
                username,
                favorites: [],
            });

            console.log("User created:", user);
        }catch (e){
            console.error("Error adding review", e.message);
        }
    }

    const addFavorite = async (userID, bookId) => {
        try{
            const favRef = doc(db, "users", userID);
            await updateDoc(favRef, {
                favorites: arrayUnion(bookId)
            });
            console.log("Item added successfully!");
        } catch (error) {
            console.error("Error adding item to array:", error);
        }
    };

    const fetchFavorites = async (userId) => {
        try{
            const userRef = doc(db, "users", userId);
            const userSnap = await getDoc(userRef)
            
            return userSnap.data().favorites || [];
        } catch (error) {
            console.error("Error fetching favorites", error);
            return [];
        }
    }


    const fetchAllUserReviews = async (userId) => {
        try{
            const q = query(collection(db, "reviews"), where("userID", "==", userId))
            const querySnapshot = await getDocs(q);
            const reviews = querySnapshot.docs.map((doc) => doc.data());
            return reviews || [];
        } catch (e) {
            console.error("Error getting reviews:", e.message);
        }
    }

    return {fetchUsername, addUser, addFavorite, fetchFavorites, favorites, myReviews}
}

export default useUserData;