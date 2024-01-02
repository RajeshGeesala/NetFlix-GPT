import React from 'react'
import Login from './Login'
import BrowseComponent from './BrowseComponent'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'



const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <BrowseComponent />
    } ,
  ])



  return (

    <RouterProvider router={appRouter} />

  )
}

export default Body