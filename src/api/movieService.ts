import { axiosInstance } from "./axios";

export const movieService = {
    getMovies: () => axiosInstance.get("/movie/popular"),
};