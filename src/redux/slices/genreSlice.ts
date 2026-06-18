import { createSlice } from "@reduxjs/toolkit";

interface IGenre {
    id: number;
    name: string;
}

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
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const { setGenres } = genreSlice.actions;

export default genreSlice.reducer;