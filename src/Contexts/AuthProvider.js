import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    // const resetEmail = ()=>{
    //     return sendPasswordResetEmail()
    // }
    const logOut = ()=>{
        return signOut (auth)
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser=> {
            console.log('observed state changed',)
            setUser(currentUser)     
        })
        return ()=>unsubscribe()
    },[])

    const authInfo = {createUser,signIn,user,logOut,updateUser,verifyEmail,googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;