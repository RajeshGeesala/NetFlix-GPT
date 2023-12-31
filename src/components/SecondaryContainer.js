import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store?.movies ) ;
  
  return (

    <div className='bg-black  '>
   <div className='sm:-mt-40   md:pl-12 pl-4 relative z-20'>
    <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"}/>
      <MovieList movies={movies.trendingMovies} title={"Trending"}/>
      <MovieList movies={movies.popularMovies} title={"Popular"}/>
      <MovieList movies={movies.topRatedMovies} title={"Top Rated"}/>
      <MovieList movies={movies.upComingMovies} title={"Upcoming Movies"}/>
      {/* <MovieList movies={movies.multiLang} title={"Multi Language"}/> */}
    </div>
    </div>
  )
}

export default SecondaryContainer