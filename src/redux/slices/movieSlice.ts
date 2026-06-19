import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models";

interface MovieState {
    movies: IMovie[];
}

const initialState: MovieState = {
    movies: [],
};

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload;
        },
    },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;