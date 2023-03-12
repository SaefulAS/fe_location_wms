import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from "axios";
const LocationList = lazy(() => import('./components/LocationList'));
const LocationCreate = lazy(() => import('./components/LocationCreate'));
const LocationEdit = lazy(() => import('./components/LocationEdit'));
const Header = lazy(() => import('./components/Header'));

function App() {
  const [locations, setLocations] = useState([]);

  return (
    <Router>
      <div className="container">
        <Header setSearchResults={setLocations} />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" render={() => <LocationList locations={locations} />} />
                <Route path="/add" component={LocationCreate} />
                <Route path="/edit/:id" component={LocationEdit} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
