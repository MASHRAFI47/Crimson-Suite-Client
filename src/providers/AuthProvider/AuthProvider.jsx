import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = {createUser}

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