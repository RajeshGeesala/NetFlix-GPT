import React from 'react'
import Header from './Header'
import useNowPLaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMOvies from '../hooks/usePopularMoviesHook'
import useTopRatedMovies from '../hooks/useTopRated'
import useUpComingMovies from '../hooks/useUpcomingMovies'

const BrowseComponent = () => {
   ///calling hooks
   useNowPLaying() ;
   useTrendingMovies() 
   usePopularMOvies()
   useTopRatedMovies()
   useUpComingMovies()
  
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