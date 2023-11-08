import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user,setUser] = useState();
    const[loading,setLoading] = useState(true);

    const googleSignIn =() =>{
        return signInWithPopup(auth,googleProvider);

    };

    const register =(email,password,name, photoURL) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           
            return updateProfile(userCredential.user, {
              displayName: name,
              photoURL: photoURL,
            }).then(() => {
              setUser(userCredential.user);
              setLoading(false);
              return userCredential.user; 
            });
          })
          .catch((error) => {
            setLoading(false);
            throw error;
          });
    }
  
    const logIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        }) ;
        return () => {
            return unsubscribe();
        };
           
        
    },[])

    const authInfo ={
        user,
        logIn,
        googleSignIn,
        register,
        logOut,
        loading
     }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;