import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store?.movies)
  return (

    // movieslist 
    //movie cards * n
    // 
    <div className='bg-black'>
    <div className=' -mt-52 relative z-20'>
    <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"}/>
      <MovieList movies={movies.nowPlayingMovies} title={"Tending"}/>
      <MovieList movies={movies.nowPlayingMovies} title={"Dubbed"}/>
      <MovieList movies={movies.nowPlayingMovies} title={"Multi Langauge"}/>
      <MovieList movies={movies.nowPlayingMovies} title={"Upcoming movies"}/>
      <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"}/>
    </div>
    </div>
  )
}

export default SecondaryContainer