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

export default App;
