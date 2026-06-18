import {axiosInstance} from "./axios";

export const movieService = {
    getMovies() {
        return axiosInstance.get("/movie/popular");
    },

    getGenres() {
        return axiosInstance.get("/genre/movie/list");
    },

    getMoviesByGenre(genreId: number) {
        return axiosInstance.get("/discover/movie", {
            params: {
                with_genres: genreId,
            },
        });
    },
};