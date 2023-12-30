
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import useMovieVideos from '../hooks/useMovieVideos'

const VideoBackGround = ({ movieId }) => {
  useMovieVideos(movieId)
  const movieTrailer = useSelector(store => store?.movies?.movieTrailer)
  return (
    <div>VideoBackGround
      <iframe 
        className='w-screen  aspect-video'
        
        src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1"}
      ></iframe>

    </div>
  )
}

export default VideoBackGround