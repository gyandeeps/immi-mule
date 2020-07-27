import { useEffect, useState } from "react";
import { User, app } from "firebase";

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        app().auth().onAuthStateChanged(setUser);
    }, []);

    return user;
};
