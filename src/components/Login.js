import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/regex'

const Login = () => {
  const [signIn, setSignIn] = useState(true) 
  const signInHandler = () => { setSignIn(!signIn) } ;
  const [errorMessage , setErrorMessage ] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const handleButton = (e) => {
     e.preventDefault()
     const message = formValidation(email.current.value , password.current.value)
     setErrorMessage(message)
     console.log(email.current.value)
  }
  return (
    <div>
      <Header />
      <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      <form action="" className={`absolute  w-2/6 my-40 mx-auto bg-opacity-80  right-0 left-0 p-12 bg-black text-white rounded-lg`}>
        <center>
        <h1 className="font-bold text-3xl"> {signIn ? "Sign In" : "Sign Up"}  </h1>
        {
          signIn ? "" : <input
            type="text"
            placeholder="User Name"
            name=""
            id=""
            className="my-4 p-2  bg-gray-500  rounded-lg"
          /> 
        }
        <br/>
        <input
          type="text"
          ref={email}
          placeholder="Email ID"
          name=""
          id=""
          className="my-4 p-2  bg-gray-500  rounded-lg"
        />  <br/>
        <input
          type="password"
          ref={password}
          name=""
          placeholder="Password"
          id=""
          className=" my-4  p-2 bg-gray-500 rounded-lg "
        />  <br/>
           <p className='text-red-500 '>{errorMessage}</p>
        <button type='submit' className=" my-6 p-3 bg-red-700 w-1/3 rounded-lg" onClick={handleButton}> {signIn ? "Sign In" : "Sign Up"} </button>
        <p onClick={signInHandler} className='cursor-pointer' >  {signIn ? "New to Netflix?  Sign Up Now" : " Already a member  ? Sign In Now "} </p>
        </center>
      </form>
    </div>
  )
} 

export default Login 




