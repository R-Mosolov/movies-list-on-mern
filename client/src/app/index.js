import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <NavBar />
        <div className="container">
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
            </Switch>
        </div>
      </Router>
  )
}

export default App;
