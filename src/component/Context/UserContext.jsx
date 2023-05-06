import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
import { toast } from "react-toastify";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const Googleprovider = new GoogleAuthProvider();
  const Fbprovider = new FacebookAuthProvider();
  const googleSignin = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        setUser(result.user);
        onCloseModal();
        toast("User successfully signed in");
      })
      .catch((err) => {
        toast("Failed to sign in");
        console.log(err);
      });
  };
  const fbSignIn = () => {
    signInWithPopup(auth, Fbprovider)
      .then((result) => {
        setUser(result.user);
        toast("User successfully signed in");
      })
      .catch((err) => {
        toast("Failed to sign in");
        console.log(err);
      });
  };
  const logOut = () => {
    toast("LogOut Sucessfull");
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return unsubscribe();
    });
  }, []);
  const authInfo = {
    open,
    setOpen,
    onOpenModal,
    onCloseModal,

    user,
    googleSignin,
    fbSignIn,

    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
