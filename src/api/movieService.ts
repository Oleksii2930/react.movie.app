import {axiosInstance} from "./axios";

export const movieService = {
    getMovies(page: number = 1) {
        return axiosInstance.get("/movie/popular", {
            params: {
                page,
            },
        });
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
    getMovieById(id: number) {
        return axiosInstance.get(`/movie/${id}`);
    },
    searchMovies(query: string) {
        return axiosInstance.get("/search/movie", {
            params: {
                query,
            },
        });
    },
};