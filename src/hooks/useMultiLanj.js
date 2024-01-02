import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMultiLangMovies} from "../utils/moviesSlice";
import { options } from "../utils/ApiCalls";
import axios from "axios";

const useMultiLang = () => {
    const dispatch = useDispatch()
    //Api call for data
    const getMultiLang = async () => {
        try {
            const fetchingApi = await axios.get("https://api.themoviedb.org/3/search/multi", options)
            
            const data = await fetchingApi.data
            console.log( "usePopular",data.results)
            dispatch(addMultiLangMovies(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
         getMultiLang() 
        
    }, [])

    

}

export default useMultiLang;