import React from 'react';
import Movies from '../layout/Movies';
import { MovieType } from '../MovieType';
import { Wrapper } from './MoviesPopular.styles';

const MoviesPopular = (props: any) => {
    return <Movies item={props.item} />;
};

export default MoviesPopular;
