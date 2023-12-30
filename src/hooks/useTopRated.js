import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    //Api call for data
    const getTopRatedMovies = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/movie/top_rated?", options)
            
            const data = await fetchingApi.data
            console.log( "usePopular",data.results)
            dispatch(addTopRatedMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTopRatedMovies() 
        
    }, [])

    

}

export default useTopRatedMovies ;