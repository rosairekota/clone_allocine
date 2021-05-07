import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from './components/Movies/MovieType';

// components(

import LinearProgress from '@material-ui/core/LinearProgress';

import { Wrapper } from './App.styles';
import Navbar from './components/navigation/Navbar';

// Queries of MOVI API

import { getMoviesRated } from './components/Movies/MoviesQueriesApi';
import { getMoviesPopular } from './components/Movies/MoviesQueriesApi';

import HomePage from './pages/HomePage';
// Routing
import { Route, Switch } from 'react-router-dom';

const PER_PAGE = 20;
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

    const previousPage = () => {
        setMovieRatedPage((old) => Math.max(old - 1, 0));
        setMoviePoluparPage((old) => Math.max(old - 1, 0));
    };
    const nextPage = () => {
        if (!isPreviousData && moviesRated?.length) {
            setMovieRatedPage((old) => old + 1);
            setMoviePoluparPage((old) => old + 1);
        }
    };
    const handleMoviesRatedPagination = ({ selected: selectedPage }) => {
        setMovieRatedPage(selectedPage);
    };

    const handleMoviesPopularPagination = ({ selected: selectedPage }) => {
        setMoviePoluparPage(selectedPage);
    };
    const offset = movieRatedPage * PER_PAGE;

    //const currentPageData = moviesRated.slice(offset, offset + PER_PAGE).map((item) => item);

    const pageCount = Math.ceil(8704 / PER_PAGE);

    return (
        <>
            {/* <Navbar></Navbar> */}

            <Switch>
                <Route exact path="/">
                    <HomePage
                        moviesRated={moviesRated}
                        moviesPopular={moviesPopular}
                        movieRatedPage={movieRatedPage}
                        pageCount={pageCount}
                        offsets={offset + PER_PAGE}
                        offset={offset}
                        handleMoviesRatedPagination={handleMoviesRatedPagination}
                        handleMoviesPopularPagination={handleMoviesPopularPagination}
                        onclickPrevieusoviesRatedPageButton={previousPage}
                        onclickNextMoviesRatedPageButton={nextPage}
                    />
                </Route>
            </Switch>
        </>
    );
};

export default App;
