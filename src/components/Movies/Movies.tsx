import React from "react";
import { MovieType } from "./MovieType";
import { Wrapper} from "./Movie.styles"


const Movies= ({ item }:any)=> {
    return (
        <Wrapper>
             <div>
            <h3>{item.title}</h3>
        </div>
       </Wrapper>
    );
}

export default Movies;