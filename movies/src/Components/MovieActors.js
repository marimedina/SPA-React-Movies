import React, {useState, useEffect} from 'react';



//VER PORQUE NO TRAE LOS ACTORES

const MovieActors = ({match}) => {

    const id = match.params.id;
    const [actors, guardarActors] = useState([]);

    useEffect( () => {
        const actors = async () => {
            const key = "924a9864b95ad82864661b2782823f3f"
            const apiURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
        
            const respuesta = await fetch(apiURL);
            const actors = await respuesta.json();

            guardarActors(actors.person);
            console.log(actors);

        }
        actors();
    }, [])

    return (
        <div>
            <h1>h</h1>
        </div>
    );
}
 
export default MovieActors;