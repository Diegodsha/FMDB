const API_KEY = 'f046554103254d739b51bc54722aee23';

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
  mostPopularS: 'https://imdb-api.com/en/API/MostPopularTVs/',
  top250S: 'https://imdb-api.com/en/API/Top250TVs/',
};

export { moviesEndPoint, seriesEndPoint };
