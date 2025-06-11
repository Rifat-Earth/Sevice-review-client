import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';



const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
      
    const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null)
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    
      const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


  const  authInfo ={
    loading,
    createUser,
    signInUser,
    googleSignIn,
    user
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;