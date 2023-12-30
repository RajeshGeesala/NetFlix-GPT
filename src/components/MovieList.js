import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='mt-1 p-6'>
            <div className='text-2xl py-2 text-white font-sans'>{title}</div>
            <div className='flex overflow-x-auto scrollBAr '>
            <div className='flex '>
                {movies?.map(movie => <MovieCard key={movie.id} posterPAth = {movie?.poster_path} />)}
            </div>
            </div>
        </div>
      )
}

export default MovieList