import React from "react";
import { useParams } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrump";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
const Movie: React.FC = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
