import React, { useEffect } from 'react'
import { Supported_languages, userLogo } from '../assets/images'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
     //showGpt search

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
     
    //toggle
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const configHandler = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  /// auth State change in useEffect
  useEffect(() => {
    const authUnSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user
        // console.log(uid, email)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribe on auth state change
    return () => authUnSub()
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
    <div className='absolute w-screen px-36 py-2 bg-gradient-to-b from-black z-10 flex   md:flex-row flex-col justify-between '>
      <img className='w-44 sm:mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      {
        user && (
          <div className='flex p-3 justify-between'>
            {  showGptSearch && (<select className='bg-gray-900 -p-2  rounded-lg text-white m-2' onChange={configHandler}>
                {
                  Supported_languages.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
              </select>)}
            <button className='bg-green-600  text-light-50 rounded-lg font-bold px-4  -pt-4 h-12 mt-2  hover:bg-green-500 mx-4'
             onClick={handleGptSearch}>
              {
                showGptSearch ? "Go to Homepage" : "GPT Search"
              }
            </button>
            <img src={user.photoURL} alt="user-icon" className='w-12 h-12 m-2 hidden md:block' />
            <button className=" h-12  mt-2 text-gray-300 font-bold px-4  -pt-4  hover:red-500 bg-red-700 rounded-lg" onClick={handleSignOut}>SIGN OUT</button>
            {/* <h2 className=>{user.displayName}</h2> */}
          </div>)
      }
    </div>
  )
}

export default Header