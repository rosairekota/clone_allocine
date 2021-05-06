import React from 'react';
import { MovieType } from './MovieType';
import { Wrapper } from './Movie.styles';
import { Button } from '@material-ui/core';

const Movies = ({ item }: any) => {
    return (
        <Wrapper>
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header--title">{item.title}</h4>
                </div>
                <div className="card__body">
                    <p className="date">March 20 2015</p>
                    <h4>{item.original_title}</h4>

                    <p className="body__content">Votes:{item.vote_count}</p>

                    <Button />
                </div>
            </div>
        </Wrapper>
    );
};

export default Movies;
