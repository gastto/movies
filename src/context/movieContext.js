import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios';

export const movieContext = createContext()

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState();

  useEffect(async () => {

        const result = await axios(
          'http://localhost:8080/api/peliculas',
          );
          const json = result.json()
          setMovies(json.movies);
    
    }, []);

    // const data = fetch('http://localhost:8080/api/peliculas');
    // const movies = data.json();

    // const [movies, setMovies] = useState(
    //     // console.log(movies)
    //     setMovies(movies)

    // );

    return(

        <movieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </movieContext.Provider>

    );
}