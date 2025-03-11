import { useState } from "react";
import { signIn, signUp } from "../services/AuthService.jsx";
import { useNavigate } from "react-router-dom";
import useUserData from "../hooks/fireBase/useUserData.jsx";

function loginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpForm, setSignUpForm] = useState(false);
    const [username, setUsername] = useState("");
    const { addUser } = useUserData();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            console.log("User signed in");
            navigate(-1);
            
        } catch (e) {
            console.error("Error signing in:", e.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const user = await signUp(email, password);
            addUser(user.uid, username);
            console.log("User signed up");
            navigate(-1);
        } catch (e) {
            console.error("Error signing up:", e.message);
        }
    }
    const renderForm = () => {
        if(!signUpForm){
            return(
                <form onSubmit={handleSignIn} className="login-form">
                    <input onChange={(e) => setEmail(e.target.value)} autoComplete="email" type="email" placeholder="Email" value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" type="password" placeholder="Password" value={password} />
                    <button type="submit">Sign In</button>
                </form>
            );
        }else{
            return(
                <form onSubmit={handleSignUp} className="login-form">
                    <input onChange={(e) => setEmail(e.target.value)} autoComplete="email" type="email" placeholder="Email" value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" type="password" placeholder="Password" value={password} />
                    <input onChange={(e) => setUsername(e.target.value)} autoComplete="username" type="username" placeholder="Username" value={username} />
                    <button type="submit">Sign Up</button>
                </form>
            );
        }
    }

    return (
        <div className="login-page">
            <img src="/logo.jpg" alt="Navireads logo" />
            <div className="sign-in">
                <h1>Sign {signUpForm? "up": "in"} to Navireads</h1>
                <div className="sign-in-tap">
                    <div onClick={() => setSignUpForm(false)}>Sign IN</div>
                    <div onClick={() => setSignUpForm(true)}>Sign Up</div>
                </div>
                {renderForm()}
            </div>
        </div>
    )
}

export default loginPage;