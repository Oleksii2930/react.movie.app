import { axiosInstance } from "./axios";

export const movieService = {
    getMovies() {
        return axiosInstance.get("/movie/popular");
    },
};