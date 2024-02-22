import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        trailerVedios: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVedio : (state, action) => {
            state.trailerVedios = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVedio} = movieSlice.actions;
export default movieSlice.reducer;