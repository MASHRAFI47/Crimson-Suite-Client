import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from '../../firebase/firebase.init';
import axios from 'axios';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: image
        }).then(() => {
            setUser({
                displayName: fullName,
                photoURL: image
            })
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = async () => {
        await axios(`https://crimson-suite-server.vercel.app/logout`, {
            withCredentials: true
        })
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = { user, loading, createUser, updateUserProfile, signInUser, signInWithGoogle, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider