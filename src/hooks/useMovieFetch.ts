import { useState, useEffect } from "react";
import API, { Movie, Crew} from "../API/API";
// Types
export type MovieState = Movie & { directors: Crew[] };
export const useMovieFetch = (movieId: string | any) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );
        setState({
          ...movie,          
          directors
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);
  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
  }, [movieId, state]);
  return { state, loading, error };
};