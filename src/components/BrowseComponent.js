import React from 'react'
import Header from './Header'
import useNowPLaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMOvies from '../hooks/usePopularMoviesHook'
import useTopRatedMovies from '../hooks/useTopRated'
import useUpComingMovies from '../hooks/useUpcomingMovies'
// import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const BrowseComponent = () => {
  ///calling hooks
  useNowPLaying();
  useTrendingMovies()
  usePopularMOvies()
  useTopRatedMovies()
  useUpComingMovies()
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header />
     { showGptSearch ?  <GptSearchPage /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }                       


    </div>
  )
}

export default BrowseComponent