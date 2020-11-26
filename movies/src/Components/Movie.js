import React from 'react';
import { Link } from 'react-router-dom';


//TITULO Y SINOPSIS DE CADA PELICULA
const Movie = ({movie}) => {

    
    const {id, title, overview} = movie;
    const img = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return ( 
        <div className="row">
            <div className="col s6 m5">    
                <div className="card">
                        <div className="card-content">
                            <div className="card-image">
                                <img src={img}></img>
                            </div>
                            <h5>{title}</h5>
                            <p>{overview}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/${id}`}>Detalle</Link>
                            
                        </div>
                   
                </div>
            </div>
        </div>
    );
}
 
export default Movie;