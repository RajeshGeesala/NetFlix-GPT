import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BgImage } from '../assets/images'

const GptSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BgImage} />
                </div>
                <GptSearchBar />
                <GptMovieSuggestions />
            
        </div>
    )
}

export default GptSearchPage