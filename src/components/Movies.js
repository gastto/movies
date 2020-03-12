import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { movieContext } from '../context/movieContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// import Details from '../Details'
// import './App.css';

const Movies = () => {

    const [movies, setMovies] = useContext(movieContext)
    const [isError] = useContext(movieContext)
    const [isLoading] = useContext(movieContext)

        return (
            <div className="bg-danger">

                <div className="container">
                    <p className="pt-4" style={{ textShadow: "5px 5px 5px black", fontSize: "50px", color: "white" }}>ULTIMOS ESTRENOS</p>
                    <div className="row m-0 w-100 mx-auto">

                        { !isError && <div>Something went wrong ...</div>}
                        
                        { !isLoading ? ( 
                        
                        <div style={{margin: "auto",padding: "10px",color: "white"}}>loading <FontAwesomeIcon icon={ faSpinner } class="fa-spin" size="xs" /></div> ) :
                        
                        (movies.map( movie => (
                            <div className="col-md-3 col-sm-4 col-12" key={ movie._id }>
                                
                                <div className="card-group">
                                    <div className="card my-5" style={{ boxShadow: "5px 5px 5px black" }}>
                                        <div className="card-header p-0">
                                            <img onLoad={<FontAwesomeIcon icon={ faSpinner } class="fa-spin" size="xs" />} src={ movie.poster } className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-body" style={{ gridTemplateColumns: "60px", gridTemplateRows: "90px 90px 90px"}}>
                                        
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
                        )))}
                            
                    </div>
                </div>
            </div>
          );
    }

  


export default Movies;
