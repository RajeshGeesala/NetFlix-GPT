import React, { useEffect } from 'react'
import { userLogo } from '../assets/images'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
const Header = () => {
  
  const dispatch = useDispatch();
   const navigate = useNavigate()
     /// auth State change in useEffect
   useEffect(() => {
   const authUnsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user
        console.log(uid, email)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      navigate("/") }
    });
    // unsubscribe on auth state change
    return ()=> authUnsub()
  }, [])
    const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
           alert(`${user.displayName} are you sure want to logout`)
            navigate("/")   
        // dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className='absolute w-screen px-36 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
       { user && (
        <div className='flex p-3'>
        <img src={user.photoURL} alt="user-icon" className='w-12 h-12 m-2' />
        <button className=" btn h-12 btn-danger mt-2 text-gray-300 font-bold  bg-red-700 rounded-lg" onClick={handleSignOut}>SIGN OUT</button>
          {/* <h2 className=>{user.displayName}</h2> */}
        </div> )}
    </div>
  )
}

export default Header