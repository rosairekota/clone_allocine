import React from 'react';
import { Wrapper } from '../MoviesRated/MoviesRated.styles';
import UrlsMovies from '../UrlsMovies';
import Button from '../../Basics/Button';

const Movies = ({ item }: any) => {
    return (
        <Wrapper>
            <div className="card">
                <div className="card__header">
                    <img src={`${UrlsMovies(0).urlImageOfMovies}${item.poster_path}`} alt={item.title} />
                </div>
                <div className="card__body">
                    <p className="date">Budget {item.budget}</p>
                    <h4>{item.title}</h4>

                    <p className="body__content">Votes★★★:{item.vote_count}</p>

                    <Button label="En savoir plus" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Movies;
