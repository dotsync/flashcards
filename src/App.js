import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// routes
import Users from "./users/pages/Users";
//stdy
import Cards from "./cards/pages/Study";

export default function App() {
  return (
    <div>
    <h1>Flashcards</h1>
    <Router>
      <Switch>
      {/* //stdy */}
      <Route path="/study" >
        <Cards />
      </Route>
      <Route path="/users" >
        <Users />
      </Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  )
}
