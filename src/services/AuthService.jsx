import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

//sign up
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up", userCredential.user);
        return userCredential.user;
    } catch(e) {
        console.error("Error signing up:", e.message);
        throw error;
    }
};

//sign in
export const signIn = async (email, password) => {
    try{
        const userCredentail = await signInWithEmailAndPassword(auth, email, password);
        return userCredentail.user;
    } catch(e) {
        console.error("Error signing in:", e.message);
        throw error;
    }
};

//sign out
export const logOut = async () => {
    try {
        await signOut(auth);
        console.log("User signed out");
    } catch(e) {
        console.error("Error signing out:", e.message);
        throw error;
    }
};
