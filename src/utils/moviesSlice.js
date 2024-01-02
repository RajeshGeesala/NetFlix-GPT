import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        trendingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null ,     
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
       
    },
});

export const { addNowPlayingMovies,
    addMovieTrailer,
    addTrendingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpComingMovies,
     } = moviesSlice.actions;

export default moviesSlice.reducer