import { useEffect, useState } from "react";
import { User, app } from "firebase";

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        try {
            // Sometimes in dev i want to disable login
            app().auth().onAuthStateChanged(setUser);
        } catch {}
    }, []);

    return user;
};
