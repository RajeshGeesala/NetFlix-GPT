import React from 'react'
import Header from './Header'
import useNowPLaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const BrowseComponent = () => {

   (useNowPLaying())
  
  return (
    <div>
      <Header />
      {/* 
      ... Main Container ;
       - videoBackground ;
       - video title ;
       Secondary Container ;
        -- Movies List * n
        -- cards * n

      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default BrowseComponent