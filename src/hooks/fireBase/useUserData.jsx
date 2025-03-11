import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, getDoc, doc, setDoc, collection, deleteDoc, getDocs, query, Timestamp, where } from 'firebase/firestore';

const useUserData = () => {
    
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

    return {fetchUsername, addUser}
}

export default useUserData;