import React from 'react';
import { MovieType } from '../MovieType';
import { Wrapper } from './MoviesRated.styles';
import Button from '../../Basics/Button';
import UrlsMovies from '../UrlsMovies';
import Movies from '../layout/Movies';

const MoviesRated = ({ item }: any) => {
    return <Movies item={item} />;
};

export default MoviesRated;
