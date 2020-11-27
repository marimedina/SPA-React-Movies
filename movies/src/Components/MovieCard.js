import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//INFO DE X PELICULA


const MovieCard = ({match}) => {
    
    const id = match.params.id;
    const [infmovie, guardarInfMovie] = useState([]);

    useEffect( () => {
        const infmovie = async () => {
            const key = "924a9864b95ad82864661b2782823f3f"
            const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        
            const respuesta = await fetch(apiURL);
            const infmovie = await respuesta.json();

            guardarInfMovie(infmovie.results);
            console.log(infmovie);

        }
        infmovie();
    }, [])

    
    const {title, backdrop_path, overview, vote_average} = infmovie;

    return (
        infmovie && (
        <div>
            <h1>h</h1>
            <h5>{title}</h5>
        </div>
        )
    );
    
}

export default MovieCard;