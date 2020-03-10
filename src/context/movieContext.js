import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios';


export const movieContext = createContext()

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([]);
    const [url, setUrl] = useState(
        'http://localhost:8080/api/peliculas',
      );
    const [isLoading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);
    

  useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsloading(true)
            try{
                const result = await axios(url);
                    setMovies(result.data);
            } catch (error) {
                setIsError(true);
            }
                setIsloading(false)
        };
  
        fetchData();
        
    }, [url]);

    return(

        <movieContext.Provider error={[isError, setIsError]} loading={[isLoading, setIsloading]} value={[movies,setMovies]}>
            {props.children}
        </movieContext.Provider>

    );
}