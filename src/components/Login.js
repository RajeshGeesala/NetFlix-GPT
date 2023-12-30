import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/regex';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { userLogo } from '../assets/images';
const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const signInHandler = () => { setSignIn(!signIn) };
  const [errorMessage, setErrorMessage] = useState(null);
  // useDispatch to update values to state
  const dispatch = useDispatch()
  const navigate = useNavigate();
  //useRef hooks form
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  //form submission
  const handleButton = async (e) => {
    await e.preventDefault()
    const message = formValidation(email.current.value, password.current.value)
    setErrorMessage(message)
    // if any error (message) is there then return above function or else 
    // do the below sign in and sign-out logic
    if (message) return;
    {
      if (!signIn) {
        //signup logic
        createUserWithEmailAndPassword(auth,
          email.current.value,
          password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            //updating pro
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: userLogo
            }).then(() => {
              // Profile updated!
              const { uid, email, photoURL, password } = auth.currentUser
              dispatch(addUser({
                uid: uid,
                email: email,
                photoURL: photoURL,
                password: password
              }))
              navigate("/browse")
            }).catch((error) => {
              // An error occurred
              console.log(error)
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            console.log(errorCode)
            setErrorMessage(errorMessage) //setting error message when signup(from firebase) 
          });
      } else {
        //sign-in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user, "User Logged In")
            navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setErrorMessage(errorMessage) //setting error message when signup(from firebase)
          });
      }
    }

  }
  return (
    <div>
      <Header />
      <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      <form action="" className={`absolute  w-2/6 my-40 mx-auto bg-opacity-80  right-0 left-0 p-12 bg-black text-white rounded-lg`}>
        <center>
          <h1 className="font-bold text-3xl"> {signIn ? "Sign In" : "Sign Up"}   </h1>
          {
            signIn ? "" : <input
              type="text"
              placeholder="User Name"
              name=""
              ref={name}
              className="my-4 p-2  bg-gray-500  rounded-lg"
            />
          }
          <br />
          <input
            type="text"
            ref={email}
            placeholder="Email ID"
            name=""
            autoComplete="current-password"
            className="my-4 p-2  bg-gray-500  rounded-lg"
          />  <br />
          <input
            type="password"
            ref={password}
            name=""
            placeholder="Password"
            id=""
            className=" my-4  p-2 bg-gray-500 rounded-lg "
          />  <br />
          <p className='text-red-500 '>{errorMessage}</p>
          <button type='submit' className=" my-6 p-2 bg-red-700 w-1/3 rounded-lg" onClick={handleButton}> {signIn ? "Sign In" : "Sign Up"} </button>
          <p onClick={signInHandler} className='cursor-pointer' >  {signIn ? "New to Netflix?  Sign Up Now" : " Already a member  ? Sign In Now "} </p>
        </center>

      </form>

    </div>
  )
}

export default Login




