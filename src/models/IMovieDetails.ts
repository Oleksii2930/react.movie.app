export interface IMovieDetails {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;

    genres: {
        id: number;
        name: string;
    }[];
}