import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useNowPLaying = () => {
    const dispatch = useDispatch()
    //Api call for data
    const getLatestMovies = async () => {
        try {
            const fetchingApi = await axios.get('https://api.themoviedb.org/3/movie/now_playing?', options)
            //https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
            const data = await fetchingApi.data
            // console.log( "useNOwPLaying",data.results)
            dispatch(addNowPlayingMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLatestMovies() 
        
    }, [])

    

}

export default useNowPLaying; 