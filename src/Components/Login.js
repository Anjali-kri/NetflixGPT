import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; // Corrected import
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const passWord = useRef(null);
  const dispatch = useDispatch()
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMsg = checkValidData(
      email.current.value,
      passWord.current.value
    );
    setErrorMsg(errorMsg);
    if (errorMsg) return;

    if (!isSignInForm) {
      // sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passWord.current.value
      ) 
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://avatars.githubusercontent.com/u/73298495?v=4"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
        }));
            navigate("/browse");
          }).catch((error) => {
            setErrorMsg(error.errorMsg);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} - ${errorMessage}`);
        });

    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value,
        passWord.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} - ${errorMessage}`);

        });

    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12  absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-6 w-full bg-gray-700"
          autoComplete="username"

        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-6 w-full bg-gray-700"
            autoComplete="username"
          />
        )}
        <input
          ref={passWord}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
          autoComplete="current-password" // corrected autoComplete attribute
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="p-4 my-6 bg-red-700  w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-white" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
