import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import genreReducer from "./slices/genreSlice";

export const store = configureStore({
    reducer: {
        movieStoreSlice: movieReducer,
        genreStoreSlice: genreReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
