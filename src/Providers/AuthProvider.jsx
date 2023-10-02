import React, { createContext, useEffect, useState } from 'react';
import {   GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for registration
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    
    // profile and user

    // profile and user

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    
    // logg in
    const loggIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    // for google signIn
    //  const googleLogIn = ()=> {
    //     setLoading(true);
    //     const provider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider);
    // }


    // log out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)

            // get and set token
            if(currentUser){
                axios.post('https://poetry-of-introversion-server.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }

            else{
                localStorage.removeItem('access-token')
            }

            
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        loggIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;