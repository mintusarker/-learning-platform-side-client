import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { useState } from 'react';


export const AuthConText = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser); 
            setUser(currentUser)  
        })

        return () => {
            unsubscribe();
        }
    }, [])


   

    const authInfo = {
        user,
        providerLogin,
        githubLogin,
        createUser,
        SignIn,
        logOut,
    }
    return (
        <div>
            <AuthConText.Provider value={authInfo}>
                {children}
            </AuthConText.Provider>
        </div>
    );
};

export default UserContext;