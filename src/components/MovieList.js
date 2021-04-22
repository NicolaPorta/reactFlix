import React from 'react';
import Movie from './Movie';
import EmptySearch from './EmptySearch';

function movieList({movies}) {
    if(movies.length === 0) {
        return (
            <EmptySearch />
        )
    }
    return(
        <ul>
          {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </ul>
    )
}

export default movieList;