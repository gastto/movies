// import React from 'react';
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// let cardData = {}

// function App() {

//   fetch('http://localhost:8080/api/peliculas').then(function(response) {
//       return response.json();
//   }).then(function(result) {
//       result.forEach(movie => {

//         cardData = {
//           "title": movie.title,
//           "years": movie.years,
//           "poster": movie.poster,
//           "trailer": movie.trailer,
//           "description": movie.description
//         }

//         alert(JSON.stringify(cardData))
        
      
//       });
//   })

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Card id="card" style={{ width: "18rem" }}>
//           <Card.Img
//             variant="top"
//             src="https://hecmiblog.files.wordpress.com/2018/05/deadpool-2-poster.jpg"
//           />
//           <Card.Body>
//             <Card.Title
//               style={{
//                 color: "black",
//                 fontSize: "2rem",
//                 fontFamily: "Calibri",
//                 fontWeight: "bold"
//               }}
//             >
//               Deadpool
//             </Card.Title>
//             <Card.Text
//               style={{
//                 color: "black",
//                 fontSize: "1rem",
//                 fontFamily: "Calibri",
//                 fontWeight: "bold"
//               }}
//             >
//               2018
//             </Card.Text>
//             <Button variant="danger">VER PELICULA</Button>
//           </Card.Body>
//         </Card>
//       </header>
//     </div>
//   )

// }

// export default App



import React from 'react';
import './App.css';
import Movies from './components/Movies'
import Details from './components/Details'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/:id" component={Details} />
          <Route render={
            () => <h3 className="mt-5">Page Not Found</h3>
          } />
        </Switch>

      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1></h1>
//   </div>
// )

export default App;
