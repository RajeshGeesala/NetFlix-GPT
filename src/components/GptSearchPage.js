import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BgImage } from '../assets/images'

const GptSearchPage = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img className='h-screen object-cover' src={BgImage} />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearchPage