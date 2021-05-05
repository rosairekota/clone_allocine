import React from 'react';
import { MovieType } from "./MovieType";
import { Wrapper } from "./Movie.styles"


const MoviesRated=(props:any) =>{
    return (
    <Wrapper>
        <div>
       <h3>{props.item.title}</h3>
   </div>
  </Wrapper>
    );
}

export default MoviesRated;