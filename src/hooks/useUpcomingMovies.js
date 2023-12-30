import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useUpComingMovies = () => {
    const dispatch = useDispatch()
    //Api call for data
    const getUpComingMovies = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/movie/upcoming?", options)
            
            const data = await fetchingApi.data
            console.log( "useUpComing",data.results)
            dispatch(addUpComingMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUpComingMovies()
        
    }, [])

    

}

export default useUpComingMovies ;