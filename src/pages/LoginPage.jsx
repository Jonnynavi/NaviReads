import { useState } from "react";
import { signIn, signUp } from "../services/AuthService.jsx";
import { useNavigate } from "react-router-dom";

function loginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            console.log("User signed in");
            navigate("/");
            
        } catch (e) {
            console.error("Error signing in:", e.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            console.log("User signed out");
            navigate("/");
        } catch (e) {
            console.error("Error signing out:", e.message);
        }
    }
    
    return (
        <div className="login-page">
            <img src="/logo.jpg" alt="Navireads logo" />
            <div className="sign-in">
                <h1>Sign in to Navireads</h1>
                <form className="login-form">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
                    <button onClick={handleSignIn}>Sign In</button>
                    <button onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default loginPage;