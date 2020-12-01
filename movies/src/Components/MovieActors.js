import React, {useState, useEffect} from 'react';
import Actors from './Actor';


const MovieActors = ({match}) => {

    const id = match.params.id
    const [actors, guardarActors] = useState([]);

    useEffect( () => {
        const actors = async () => {
            const key = "924a9864b95ad82864661b2782823f3f"
            
            const apiURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
        
            const respuesta = await fetch(apiURL);
            const actors = await respuesta.json();

            guardarActors(actors.cast);
            

        }
        actors();
    }, [])

    

    return (
        <div>
            {actors && actors.map(actor => (
                <Actors
                    key={actor.id}
                    actor={actor}
                />
            ))}
        </div>
    );
}
 
export default MovieActors;