import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Details from '../Details'
// import './App.css';

function Movies() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [movies, setMovies] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('http://localhost:8080/api/peliculas');

            const movies = await data.json();
            // console.log(movies)
            setMovies(movies)

    };

        return (
            <div className="bg-danger">
                <div className="container">
                    <p className="pt-4" style={{ textShadow: "5px 5px 5px black", fontSize: "50px", color: "white" }}>ULTIMOS ESTRENOS</p>
                    <div className="row m-0 w-100 mx-auto">
                        
                        { movies.map( movie => 
                            <div className="col-md-3 col-sm-4 col-12" key={ movie._id }>
                                
                                <div className="card-group">
                                    <div className="card my-5" style={{ boxShadow: "5px 5px 5px black" }}>
                                        <div className="card-header p-0">
                                            <img src={ movie.poster } className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-body h-100" style={{ gridTemplateColumns: "60px", gridTemplateRows: "90px 90px 90px"}}>
                                        
                                        <div style={{ height: "80px" }}>
                                            <p className="m-1"> { movie.title } </p>
                                            <h6 className="m-1"> { movie.years } </h6>
                                        </div>
                                            
                                            <Link to={`/movie/${movie._id}`}>
                                                <button className="btn btn-danger">DETALLE</button>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                            
                    </div>
                </div>
            </div>
          );
    }

  


export default Movies;
