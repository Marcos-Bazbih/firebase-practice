import { createContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();

export const FirebaseContext = createContext();

const FirebaseContextProvider = ({ children }) => {
    const [user] = useAuthState(firebaseAuth);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(firebaseAuth);
    }, []);

    return (
        <FirebaseContext.Provider value={{ user, auth }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContextProvider;