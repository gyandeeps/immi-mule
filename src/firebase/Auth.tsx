import React from "react";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useUser } from "./hooks";

const Auth: React.FC = ({ children }) => {
    const user = useUser();

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    return user ? (
        <>{children}</>
    ) : (
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.app().auth()}
        />
    );
};

export default Auth;
