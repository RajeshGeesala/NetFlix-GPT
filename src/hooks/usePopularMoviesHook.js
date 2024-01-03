import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    // using variable from store using  useSelector for memoization ;
  const popularMovies = useSelector(store => store.movies.popularMovies) ;
    //Api call for data
    const getPopularMovies = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/movie/popular?", options)
            
            const data = await fetchingApi.data
            // console.log( "usePopular",data.results)
            dispatch(addPopularMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      !popularMovies && getPopularMovies() 
        
    }, [])

    

}

export default usePopularMovies ;