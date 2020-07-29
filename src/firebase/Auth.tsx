import React from "react";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useUser } from "./hooks";

type AuthProps = {
    skipAuth?: boolean;
};

const Auth: React.FC<AuthProps> = ({ children, skipAuth = false }) => {
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

    return user || skipAuth ? (
        <>{children}</>
    ) : (
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.app().auth()}
        />
    );
};

export default Auth;
