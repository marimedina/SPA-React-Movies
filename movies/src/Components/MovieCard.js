import React from 'react';
import { Link } from 'react-router-dom';

//INFO DE X PELICULA

const key = "924a9864b95ad82864661b2782823f3f"
const MovieCard = ({
    id,
    title,
    backdrop_path,
    overview,
    popularity,
    genres
}) => {
    return (
        <div>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`}></img>
                </div>
                <div className="col-md-8">
                    <Link to={`/${id}`}>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;