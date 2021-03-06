import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const MovieCard = ({match}) => {
    
    const id = match.params.id;
    const [infmovie, guardarInfMovie] = useState({ title: "", backdrop_path: "", overview: "", vote_count: "" });
   

    useEffect( () => {
        const infmovie = async () => {
            const key = "924a9864b95ad82864661b2782823f3f"
            const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        
            const respuesta = await fetch(apiURL);
            const infmovie = await respuesta.json();

            guardarInfMovie(infmovie);

        }
        infmovie();
    }, [])

    


    const {title, poster_path, overview, vote_count, genres} = infmovie
    const img = `https://image.tmdb.org/t/p/w500${poster_path}`
    
    
    
    

    return (
        <div className='container'>
            <div className='col s12 m7'>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={img}></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content center">
                            <h4>{title}</h4>
                            <h5>{overview}</h5>
                            <br></br>
                            <h6>GENRES: {genres && genres.map(genres => `${genres.name}`).join(', ')}</h6>
                            <h6>POINTS: {vote_count}</h6>
                        </div>
                        <div className="card-action center">
                            <Link to={`/${id}/actors`} className='red-text'>Actors</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

export default MovieCard;