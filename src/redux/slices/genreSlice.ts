import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGenre } from "../../models";

interface GenreState {
    genres: IGenre[];
}

const initialState: GenreState = {
    genres: [],
};

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload;
        },
    },
});

export const { setGenres } = genreSlice.actions;

export default genreSlice.reducer;