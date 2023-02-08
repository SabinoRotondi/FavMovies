import React from "react";
// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config/config";
// Components
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import Button from "./Button";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// FallbackImage
import NoImage from "../images/no_image.jpg";
const Home: React.FC = () => {
  const { state, loading, error, setIsLoadingMore } = useHomeFetch();
  console.log(state);
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  return (
    <>
      <Grid>
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieHeight={false}
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </>
  );
};
export default Home;
