import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from './components/Movies/MovieType';

import Movies from './components/Movies/Movies';
import MoviesRated from "./components/Movies/MoviesRated";

// components(
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Container from '@material-ui/core/Container';
import { stringify } from 'querystring';
import { Wrapper } from './App.styles';
import Navbar from "./components/navigation/Navbar";

// Queries of MOVI API

import { getMoviesRated } from "./components/Movies/MoviesQueriesApi";
import { getMoviesPopular } from "./components/Movies/MoviesQueriesApi";

import Home from "./pages/Home";
// Routing
import { Route, Switch } from 'react-router-dom';



  
const App = () => {
  const { data: moviesRated, isLoading: loadingMoviesRated, error: errorOfMoviesRated } = useQuery<MovieType[]>('MoviesRated', getMoviesRated);
  const { data: moviesPopular, isLoading: loadingMoviesPopular, error: errorOfMoviePopular } = useQuery<MovieType[]>('MoviesPopular', getMoviesPopular);
  
  const [movieRated, setMoviesRated] = useState([] as MovieType[]);
  const [moviePolupar, setMoviesPolupar] = useState([] as MovieType[]);
  


  const isLoading = loadingMoviesRated && loadingMoviesPopular;
  const error = errorOfMoviePopular && errorOfMoviesRated;



	if (isLoading) return <LinearProgress />;
  else if (error) return <div>Oups,erreur du serveur..</div>;
  
  const HomePage = () => {
     return <Home moviesRated={moviesRated} moviesPopular={moviesPopular}/>
  }

	return (
    <>
       <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
     
    
    
    </>
	);
};

export default App;
