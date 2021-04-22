import React from 'react';

function movie({movie}) {
    var poster = 'https://image.tmdb.org/t/p/w342/' + movie.poster_path;
    if (movie.poster_path == null) {
        poster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/185px-Netflix_2015_N_logo.svg.png';
    }
    return(
       <li className="card">
            <img className="card-img-top" src={poster} alt={movie.original_title}/>
            <div className="card-body">
                <h4 className="card-title">{movie.original_title}</h4>
                <h5 className="card-text">Vote: {movie.vote_average}/10</h5>
                <p className="card-text">Date: {movie.release_date}</p>
            </div>
        </li>
    );
}

export default movie;