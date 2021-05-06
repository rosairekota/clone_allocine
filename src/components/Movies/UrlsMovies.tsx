const UrlsMovies = (page) => {
    return {
        urlMoviesRated: `https://api.themoviedb.org/3/movie/top_rated?page=${page}&&api_key=31be5a6f98fca982101536e359cd308e`,
        urlMoviesPopular: `https://api.themoviedb.org/3/movie/popular?page=${page}&&api_key=31be5a6f98fca982101536e359cd308e`,
        urlMoviesLatest:
            'https://api.themoviedb.org/3/movie/popular?page=${page}&&api_key=31be5a6f98fca982101536e359cd308e',
        urlMoviesById: 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=31be5a6f98fca982101536e359cd308e',
        urlImageOfMovies:
            'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=31be5a6f98fca982101536e359cd308e',
    };
};

export default UrlsMovies;
