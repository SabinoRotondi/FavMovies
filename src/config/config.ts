const API_URL:string = "https://api.themoviedb.org/3/";
const API_KEY:string = "a74169393e0da3cfbc2c58c5feec63d7";
const POPULAR_BASE_URL:string = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
const IMAGE_BASE_URL:string = "http://image.tmdb.org/t/p/";
const BACKDROP_SIZE:string = "w500";
const POSTER_SIZE:string = "w500";

export {
  API_URL,
  API_KEY,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
