import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "../firebase";
import { serverTimestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  const onGoogleClick = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // add Google user details in users database but first check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Google authorization failed.");
      console.log(error);
    }
  };
  return (
    <button
      onClick={onGoogleClick}
      type='button'
      className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'
    >
      <FcGoogle className='text-2xl bg-white rounded-full mx-4' />
      Continue with Google
    </button>
  );
}
