import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// routes
import Users from "./users/pages/Users";
//stdy
import Cards from "./cards/pages/Study";

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  app: {
    border: '3px solid green',
    position: 'relative',
    height: '100vh',
    width: '100%',
  }
}));



export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <nav><h1>navbar goes here</h1></nav>
      <Router>
        <Switch>
          {/* //stdy */}
          <Route path="/study" >
            <Cards />
          </Route>
          <Route path="/users" >
            <Users />
          </Route>
          <Redirect to="/study" />
        </Switch>
      </Router>
    </div>
  )
}
