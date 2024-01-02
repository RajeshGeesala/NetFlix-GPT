import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice'
import { options } from '../utils/ApiCalls';
import axios from 'axios';

const useMovieVideos = (movieId) => {
      
    const dispatch = useDispatch()

    const getMovieVideo = async () => {
        try {
            const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
            const movieData = await getMovieDetails.data;
            // console.log(movieData)
            //filtered movieTrailer
            const movieTrailerFiltered = movieData.results.find((video) => video.type == "Trailer")
            // console.log(movieTrailerFiltered)
            // if trailer is not there we have to display another video ;
            const movieVideo = movieData.results.find((video) => video.type == "Teaser")
            // console.log(movieVideo)
            const finalVideoToDisplay = movieTrailerFiltered ? movieTrailerFiltered : movieVideo;
            // console.log("final video", movieTrailerFiltered);
            //dispatch to add movie trailer
            dispatch(addMovieTrailer(finalVideoToDisplay)); }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovieVideo()

    }, [])
    return
}

export default useMovieVideos