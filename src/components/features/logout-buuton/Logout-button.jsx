import { useContext } from "react";
import { FirebaseContext } from "../../../contexts/firebase-context";

const LogoutButton = () => {
    const { auth } = useContext(FirebaseContext);

    const Logout = () => {
        auth.signOut();
    }

    return (
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export default LogoutButton;