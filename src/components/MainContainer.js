import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store =>  store?.movies?.nowPlayingMovies) ;
    // console.log(movies)
     if (!movies) return 
       const mainMovie  = movies[7]
      //  console.log(mainMovie)
       const {title ,overview ,id} = mainMovie ;
      //  console.log(id)
  return (
    <div className='md:pt-0  bg-black pt-[30%]' >
         <VideoTitle title={title} overview={overview} />
         <VideoBackGround movieId={id}/> 
    </div>
  )
}

export default MainContainer