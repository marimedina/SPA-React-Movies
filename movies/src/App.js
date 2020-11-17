import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MoviesList from './Components/MoviesList';

function App() {

  const [movies, guardarMovies] = useState([]);

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
