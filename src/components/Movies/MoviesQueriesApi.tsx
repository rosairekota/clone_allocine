import axios from 'axios';
import UrlsMovies from './UrlsMovies';
import { MovieType } from "./MovieType";

export const getMoviesRated = async (): Promise<MovieType[]> =>
  await (await axios.get(UrlsMovies.urlMoviesRated)).data.results;


export const getMoviesPopular = async (): Promise<MovieType[]> =>
  await (await axios.get(UrlsMovies.urlMoviesPopular)).data.results;

