import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {   addUpComingMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useUpComingMovies = () => {
    const dispatch = useDispatch() ;
     // using variable from store using  useSelector for memoization ;
     const  upComingMovies = useSelector(store => store.movies.upComingMovies);
    //Api call for data
    const getUpComingMovies = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/movie/upcoming?", options)
            
            const data = await fetchingApi.data
            // console.log( "useUpComing",data.results)
            dispatch(addUpComingMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
     !upComingMovies &&  getUpComingMovies()    
    },[ ] )

    

}

export default useUpComingMovies ;