import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// import Details from '../Details'
// import './App.css';

function Details({ match }) {

    useEffect(() => {
        fetchItem();
        // console.log(match)
    });

    const [ movie, setMovie ] = useState([]);

    const fetchItem = async () => {

        const fetchItem = await fetch(`http://localhost:8080/api/peliculas/${match.params.id}`);

        const movie = await fetchItem.json();

        setMovie(movie);

        // console.log(movie)
      
    };


    return (
        
        <div className="bg-danger" style={{ height: "100vh" }}>
            
            
        { movie.map( movie =>
            <div key={movie._id} className="container">

            
                
                <h1 align="left" className="pt-3 text-white"><Link to="/" className="btn btn-danger"><FontAwesomeIcon icon={faAngleLeft} size="lg" /></Link> {movie.title} ({ movie.years })</h1>
                <hr />

                <div className="row">

                    <div className="col-md-8">

                        <iframe style={{overflow: "hidden", width: "100%" }} align="left" title='trailer' width="100%" height='315' src={`https://www.youtube.com/embed/${movie.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
                        
                        <p className="mt-2 text-white d-inline-block" align="left">
                            DESCRIPCION:
                            <br/>
                            { movie.description }
                        </p>

                    </div>

                    <div className="col-md-4">
                        <img align="right" src={ movie.poster } className="img-fluid" alt="" />
                    </div>


                </div>




            </div>


        


        )}
    
          
        </div>
        );
    }

  


export default Details;
