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

import Home from './pages/Home';
// Routing
import { Route, Switch } from 'react-router-dom';

const PER_PAGE = 6;
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
        setMoviePoluparPage((old) => Math.max(old - 1, 1));
    };
    const nextPage = () => {
        if (!isPreviousData && moviesRated?.length) {
            setMovieRatedPage((old) => old + 1);
            setMoviePoluparPage((old) => old + 1);
        }
    };
    function handlePageClick({ selected: selectedPage }) {
        setMovieRatedPage(selectedPage);
    }

    const offset = movieRatedPage * PER_PAGE;

    console.log('page 1:1', moviesRated);
    //const currentPageData = moviesRated.slice(offset, offset + PER_PAGE).map((item) => item);

    const pageCount = Math.ceil(8704 / PER_PAGE);

    const HomePage = () => {
        return (
            <Home
                moviesRated={moviesRated}
                moviesPopular={moviesPopular}
                movieRatedPage={movieRatedPage}
                onclickNextMoviesRatedPageButton={nextPage}
                disabled={movieRatedPage === 0}
                onclickPrevieusoviesRatedPageButton={previousPage}
                pageCount={pageCount}
                offsets={offset + PER_PAGE}
                offset={offset}
                handlePageClick={handlePageClick}
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
