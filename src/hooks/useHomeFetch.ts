import { useState, useEffect } from "react";
// API
import API, {Movie} from "../API/API";
const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [getMovie, setGetMovie] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const fetchMovies = async (page:number, getMovie = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(getMovie, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  // Initial
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Load More Button
  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    fetchMovies(state.page + 1, getMovie);
    setIsLoadingMore(false);
  }, [isLoadingMore, getMovie, state.page]);
  // Write to sessionStorage
  useEffect(() => {
    if (!getMovie) {
      return sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [getMovie, state]);
  return { state, loading, error, getMovie, setGetMovie, setIsLoadingMore };
};
