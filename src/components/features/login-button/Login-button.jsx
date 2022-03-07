import { useContext } from "react";
import { FirebaseContext } from "../../../contexts/firebase-context";
import firebase from "firebase/compat/app";

const LoginButton = () => {
    const { user, auth } = useContext(FirebaseContext);
    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider);
    }
    return (
        <div>
            <button onClick={googleLogin}>Login</button>
            <h1>{user?.displayName }</h1>
        </div>
    );
};

export default LoginButton;