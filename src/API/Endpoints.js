export const API_KEY = process.env.REACT_APP_API_KEY;

const moviesEndPoint = {
  mostPopular: `/movie/popular?api_key=${API_KEY}`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=8&watch_region=US`,
  sciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=US`,
  comingSoon: '/movie/upcoming?api_key=f046554103254d739b51bc54722aee23&language=en-US&page=1&region=US',
  details: {
    fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
  },
};

const seriesEndPoint = {
  popular: `/tv/popular?api_key=${API_KEY}`,
  sciFiS: `/discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US`,
  documentary: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`,
};

export { moviesEndPoint, seriesEndPoint };
