import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MovieType } from '../components/Movies/MovieType';

import Movies from '../components/Movies/Movies';
import MoviesRated from "../components/Movies/MoviesRated";

// components(

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Wrapper } from '../App.styles';

// Queries of MOVI API


const Home=({moviesRated,moviesPopular}:any)=> {
    return (
        <div>
      <Wrapper>
      <Container>
        
        <h2>Les Meilleurs Films</h2>
        <Grid container spacing={3}>
        {moviesRated?.map((item) => (
						<Grid item xs={12} sm={4} md={2} key={item.id}>
							<Movies item={item} />
						</Grid>
					))}
        </Grid>

        <h2 className="mt-2">Les Films les plus populaires</h2>
				<Grid container spacing={3}>
        {moviesPopular?.map((item) => (
          <Grid item xs={12} sm={4} md={2} key={item.id}>
							<MoviesRated item={item}/>
						</Grid>
					))}
        </Grid>
      
			</Container>
    </Wrapper>
        </div>
    );
}

export default Home;