import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from '../components/Movies/MovieType';

import Movies from '../components/Movies/Movies';
import MoviesRated from '../components/Movies/MoviesRated';

// components(

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Wrapper } from './Home.styles';
import PaginationControlled from '../components/Movies/Pagination';

// css

// Queries of MOVI API

const Home = (props: any) => {
    return (
        <div>
            <Wrapper>
                <Container>
                    <h2>Les Meilleurs Films</h2>
                    <Grid container spacing={3} className="grid-container">
                        {props.moviesRated?.map((item) => (
                            <Grid item xs={12} sm={4} md={2} key={item.id}>
                                <Movies item={item} />
                            </Grid>
                        ))}
                    </Grid>
                    {/* <div className="paginate">
                        <PaginationControlled page={props.movieRatedPage} handlePrevious={props.handlePrevious} />
                    </div> */}
                    <button onClick={props.onclickPrevieusoviesRatedPageButton} disabled={props.disabled}>
                        Precedent
                    </button>
                    <button onClick={props.onclickNextMoviesRatedPageButton}>Suivant</button>

                    <h2 className="mt-2">Les Films les plus populaires</h2>
                    <Grid container spacing={3} className="grid-container">
                        {props.moviesPopular?.map((item) => (
                            <Grid item xs={12} sm={4} md={2} key={item.id}>
                                <MoviesRated item={item} />
                            </Grid>
                        ))}
                    </Grid>
                    <button onClick={props.onclickPrevieusoviesRatedPageButton} disabled={props.disabled}>
                        Precedent
                    </button>
                    <button onClick={props.onclickNextMoviesRatedPageButton}>Suivant</button>
                </Container>
            </Wrapper>
        </div>
    );
};

export default Home;
