import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const signInHandler = () => { setSignIn(!signIn) }
  return (
    <div>
      <Header />
      <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      <form action="" className={`absolute  w-3/12 my-40 mx-auto bg-opacity-75 right-0 left-0 p-12 bg-black text-white rounded-lg`}>
        <h1 className="font-bold text-xl"> {signIn ? "Sign In" : "Sign Up"}  </h1>
        {
          signIn ? "" :  <input
          type="text"
          placeholder="User Name"
          name=""
          id=""
          className="my-4 p-2  bg-gray-500  rounded-lg"
        />
        }
        <input
          type="text"
          placeholder="Email ID"
          name=""
          id=""
          className="my-4 p-2  bg-gray-500  rounded-lg"
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          id=""
          className=" my-4  p-2 bg-gray-500 rounded-lg "
        />
        <button className=" my-6 p-3 bg-red-700 w-full rounded-lg"> {signIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={signInHandler} > <span className='cursor-pointer'>  {signIn ? "New to Netflix? Sign Up Now" : " Already a member  ? Sign In Now......."}</span>  </p>
      </form>
    </div>
  )
}

export default Login