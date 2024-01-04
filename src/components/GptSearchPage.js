import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BgImage } from '../assets/images'

const GptSearchPage = () => {
    return (
        <>
        <div className='fixed  h-screen w-full -z-10'>
          <img className='w-full object-cover h-screen' src={BgImage} alt="Background" />
        </div>
        <div className=''>
          {/* Adjust margin-top based on screen size */}
          <GptSearchBar />
          <GptMovieSuggestions />  
        </div>
      </>
      
    )
}

export default GptSearchPage