import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTrendingMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useTrendingMovies = () => {
    const dispatch = useDispatch() ;
       // using variable from store using  useSelector for memoization ;
       const trendingMovies = useSelector(store => store.movies.trendingMovies);
    //Api call for data
    const getTrendingMovies = async () => {
        try {
            const fetchingApi = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            const data = await fetchingApi.data
            // console.log("use trending",data.results)
            dispatch(addTrendingMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       !trendingMovies &&   getTrendingMovies()
    }, [])

}

export default useTrendingMovies; 