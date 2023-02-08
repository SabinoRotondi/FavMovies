import { POPULAR_BASE_URL, API_URL, API_KEY } from "../config/config";

// Types
export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  crew: Crew[];
};

const apiSettings = {
  fetchMovies: async (getMovie: string, page: number): Promise<Movies> => {
    const fetchedMovies: string =
      (getMovie = `${POPULAR_BASE_URL}&page=${page}`);
    return await (await fetch(fetchedMovies)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const fetchedMovies: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(fetchedMovies)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsFetchedMovies: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsFetchedMovies)).json();
  },
};

export default apiSettings;
