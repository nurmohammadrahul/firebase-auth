import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider= new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()
    const registerUser = (email,password)=> {
       return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const loginUser =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const facebookLogin=()=>{
        return signInWithPopup(auth,facebookProvider)
    }
    const  authInfo={
        registerUser,
        loginUser,
        user,
        setUser,
        googleLogin,
        facebookLogin
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;