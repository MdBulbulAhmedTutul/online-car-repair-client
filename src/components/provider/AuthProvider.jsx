import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // manageUser
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('user manage', currentUser);
            setLoading(false);
        })
        return () => {
            unsubsCribe()
        }
    }, [])

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // googleLogin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // get the profilePicture
    const updateProfilePicture = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        updateProfilePicture
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;