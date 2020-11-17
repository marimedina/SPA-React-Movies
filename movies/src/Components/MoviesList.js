import React from 'react';
import Movie from './Movie';

const MoviesList = ({movies}) => {
    return ( 
        <div>
            {movies.map(movie => (
                <Movie
                    img={movie.backdrop_path}
                    movie={movie}
                />
            ))}
        </div>
     );
}
 
export default MoviesList;