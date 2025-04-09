import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidation} from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userInfoSlice";
import { BODY_IMAGE, USER_PHOTO } from "../utils/constant";


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [showError, setShowError] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggel = () => {
    setIsSignIn(!isSignIn);
  }

  const checkFormValidation = () => {
    let isLogin;
    const message = isSignIn ? checkValidation(email.current.value, password.current.value, isLogin = true) : checkValidation(email.current.value, password.current.value, isLogin = false, name.current.value);
    setShowError(message);

    if(message) return;

    if (isSignIn) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setShowError(errorCode + " => " + errorMessage);
      });
    } else {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: USER_PHOTO
          }).then(() => {
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }))
          }).catch((error) => {
            setShowError(error.code + " => " + error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setShowError(errorCode + " => " + errorMessage);
      });
    }
  }

  return(
      <div className="">
        <Header />
        <img className="" src={BODY_IMAGE} alt="Body Image" />
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl absolute left-0 right-0 w-3/12 mx-auto top-20 text-white p-14 bg-black opacity-90">
          <fieldset className="text-white">
            <legend className="my-4 font-bold text-2xl">{isSignIn ? "Sign In": "Sign Up"}</legend>
            {!isSignIn && <input type="name" placeholder="Enter Full Name" className="p-2 my-4 bg-gray-800 w-full" ref={name} />}
            <input type="email" placeholder="Enter Email" className="p-2 my-4 bg-gray-800 w-full" ref={email}/>
            <input type="password" placeholder="Enter Password" className="p-2 my-4 bg-gray-800 w-full" ref={password} />
            <span className="p-2 text-red-700">{showError}</span>
            <button className="p-4 my-4 rounded-2xl bg-red-700 w-full cursor-pointer" onClick={checkFormValidation}>{isSignIn ? "Sign In": "Sign Up"}</button>
            <p className="m-2 cursor-pointer" onClick={handleToggel}>{isSignIn ? "New to Netflix? Sign up now.": "Already have an account? Sign in now"}</p>
          </fieldset>
        </form>
      </div>
  )
}

export default Login;