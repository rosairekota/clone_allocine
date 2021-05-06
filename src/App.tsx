import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from './components/Movies/MovieType';

import Movies from './components/Movies/Movies';
import MoviesRated from './components/Movies/MoviesRated';
import axios from 'axios';
import UrlsMovies from './components/Movies/UrlsMovies';

// components(
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Container from '@material-ui/core/Container';
import { stringify } from 'querystring';
import { Wrapper } from './App.styles';
import Navbar from './components/navigation/Navbar';

// Queries of MOVI API

import { getMoviesRated } from './components/Movies/MoviesQueriesApi';
import { getMoviesPopular } from './components/Movies/MoviesQueriesApi';

import Home from './pages/Home';
// Routing
import { Route, Switch } from 'react-router-dom';

const movieRatePaginate = getMoviesRated;
const App = () => {
    const [movieRatedPage, setMovieRatedPage] = useState(1);
    const [moviePoluparPage, setMoviePoluparPage] = useState(1);

    const {
        data: moviesRated,
        isLoading: loadingMoviesRated,
        isPreviousData: isPreviousMoviesRated,
        isFetching: isFetchingMoviesRated,
        error: errorOfMoviesRated,
    } = useQuery<MovieType[]>(['MvRated', movieRatedPage], () => getMoviesRated(movieRatedPage), {
        keepPreviousData: true,
    });

    const {
        data: moviesPopular,
        isLoading: loadingMoviesPopular,
        isPreviousData: isPreviousMoviesPopular,
        isFetching: isFetchingMoviesPopular,
        error: errorOfMoviePopular,
    } = useQuery<MovieType[]>(['MoviesPopular', moviePoluparPage], () => getMoviesPopular(moviesPopular), {
        keepPreviousData: true,
    });

    const isLoading = loadingMoviesRated && loadingMoviesPopular;
    const error = errorOfMoviePopular && errorOfMoviesRated;
    const isPreviousData = isPreviousMoviesRated && isPreviousMoviesPopular;
    const isFetching = isFetchingMoviesRated && isFetchingMoviesPopular;

    if (isLoading) return <LinearProgress />;
    else if (error) return <div>Oups,erreur du serveur..</div>;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setMovieRatedPage(value);
    };
    const previousPage = () => {
        setMovieRatedPage((old) => Math.max(old - 1, 1));
        setMoviePoluparPage((old) => Math.max(old - 1, 1));
    };
    const nextPage = () => {
        if (!isPreviousData && moviesRated?.length) {
            setMovieRatedPage((old) => old + 1);
            setMoviePoluparPage((old) => old + 1);
        }
    };
    const getages = () => {
        return !isPreviousData ? nextPage() : previousPage();
    };
    const HomePage = () => {
        return (
            <Home
                moviesRated={moviesRated}
                moviesPopular={moviesPopular}
                movieRatedPage={movieRatedPage}
                onclickNextMoviesRatedPageButton={nextPage}
                disabled={movieRatedPage === 1}
                onclickPrevieusoviesRatedPageButton={previousPage}
            />
        );
    };
    console.log('paginate:', moviesRated);
    // setMoviesRated(moviesRated);
    return (
        <>
            <Navbar></Navbar>

            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </>
    );
};

export default App;
