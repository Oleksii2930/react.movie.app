import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
});

export default movieSlice.reducer;