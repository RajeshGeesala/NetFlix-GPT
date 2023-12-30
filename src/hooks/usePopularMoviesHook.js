import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    //Api call for data
    const getPopularMovies = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/movie/popular?", options)
            
            const data = await fetchingApi.data
            console.log( "usePopular",data.results)
            dispatch(addPopularMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPopularMovies() 
        
    }, [])

    

}

export default usePopularMovies ;