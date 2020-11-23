import React, { useEffect, useState } from 'react';
import Footer from './Components/UI/Footer';
import Header from './Components/UI/Header';
import MoviesList from './Components/MoviesList';
import MovieCard from './Components/MovieCard';

function App() {

  const [movies, guardarMovies] = useState([]);
  //const [movieId, guardarDetalle] = useState([]);

  useEffect( () => {
    const consultarApi = async () => {
      const key = "924a9864b95ad82864661b2782823f3f"
      const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`

      const respuesta = await fetch(apiURL);
      const movies = await respuesta.json();

      guardarMovies(movies.results);

    }
    consultarApi();
  }, [])
/*
  useEffect( () => {
    const detalleMovie = async () => {
      const key = "924a9864b95ad82864661b2782823f3f"
      const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`

      const respuesta = await fetch(apiURL);
      const movieId = await respuesta.json();

      guardarDetalle(movieId);
    }
    detalleMovie();
  }, [])
*/
  return (
    <>
      <Header titulo='Movies React App'/>
      
      <MoviesList
        movies={movies}
      />

      <Footer/>
    </>
  );
}

export default App;



/*
<Router>
        <Switch>
          <Route exact path = "/" component={MoviesList}/>
          <Route exact path = "/movieCard" render={() => <MovieCard/>}/>
        </Switch>
      </Router>
*/