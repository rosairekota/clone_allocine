import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from '../components/Movies/MovieType';

// components(

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Wrapper } from './Home.styles';
import PaginationControlled from '../components/Movies/Pagination';
import ReactPaginate from 'react-paginate';
import MoviesPopular from '../components/Movies/MoviesPopular/MoviesPopular';
import MoviesRated from '../components/Movies/MoviesRated/MoviesRated';

// css

// Queries of MOVI API

const Home = (props: any) => {
    return (
        <div>
            <Wrapper>
                <Container>
                    <h2>Les Meilleurs Films</h2>
                    <Grid container spacing={3} className="grid-container">
                        {props.moviesRated.slice(props.offset, props.offsets)?.map((item) => (
                            <Grid item xs={12} sm={4} md={2} key={item.id}>
                                <MoviesRated item={item} />
                            </Grid>
                        ))}
                    </Grid>
                    <ReactPaginate
                        previousLabel={'← Précédent'}
                        nextLabel={'Suivant →'}
                        pageCount={props.pageCount}
                        onPageChange={props.handlePageClick}
                        containerClassName={'pagination'}
                        previousLinkClassName={'pagination__link'}
                        nextLinkClassName={'pagination__link'}
                        disabledClassName={'pagination__link--disabled'}
                        activeClassName={'pagination__link--active'}
                    />
                    {/* <button onClick={props.onclickPrevieusoviesRatedPageButton} disabled={props.disabled}>
                        Precedent
                    </button>
                    <button onClick={props.onclickNextMoviesRatedPageButton}>Suivant</button> */}

                    <h2 className="mt-2">Les Films les plus populaires</h2>
                    <Grid container spacing={3} className="grid-container">
                        {props.moviesPopular?.map((item) => (
                            <Grid item xs={12} sm={4} md={2} key={item.id}>
                                <MoviesPopular item={item} />
                            </Grid>
                        ))}
                    </Grid>
                    <ReactPaginate
                        previousLabel={'← Précédent'}
                        nextLabel={'Suivant →'}
                        pageCount={props.pageCount}
                        onPageChange={props.handlePageClick}
                        containerClassName={'pagination'}
                        previousLinkClassName={'pagination__link'}
                        nextLinkClassName={'pagination__link'}
                        disabledClassName={'pagination__link--disabled'}
                        activeClassName={'pagination__link--active'}
                    />
                </Container>
            </Wrapper>
        </div>
    );
};

export default Home;
