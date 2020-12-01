import React, {useState, useEffect} from 'react';
import Movie from './Movie';


const MoviesList = () => {
  const [movies, guardarMovies] = useState([]);

  useEffect( () => {
    const consultarApi = async () => {
      const key = "924a9864b95ad82864661b2782823f3f"
      const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`

      const respuesta = await fetch(apiURL);
      const movies = await respuesta.json();

      guardarMovies(movies.results);
      

    }
    consultarApi();
  }, [])
    return ( 
        
          <div className='row'> 
              
              {movies && movies.map(movie => (
              
                  <Movie
                      key={movie.id}
                      img={movie.backdrop_path}
                      movie={movie}
                  />
              ))}
              
          </div>
     );
}
 
export default MoviesList;