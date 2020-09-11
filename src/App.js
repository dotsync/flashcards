import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// routes
import Users from "./users/pages/Users";

export default function App() {
  return (
    <div>
    <h1>Flashcards</h1>
    <Router>
      <Route path="/users" >
        <Users />
      </Route>
    </Router>
    </div>
  )
}
