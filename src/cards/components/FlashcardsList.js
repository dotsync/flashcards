import React from 'react'

import Flashcard from './Flashcard'

import { makeStyles } from '@material-ui/core/styles';
import {GridListTile, Container } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  border: {
    // border: '3px solid red',
    height: '400px'
  },
  card: {
    background: 'white',
    margin: '5px',
    'border-radius': '25px',
        // border: '3px solid red',
  },
}));

export default function MyCardsList({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> }
  return (
    <Container maxWidth="sm" className={classes.border}><h4>scroll down!</h4>
      {(myFlashcards !== undefined) && myFlashcards.map((card, i) => (
        // generate a GridListTile for each flashcard
        <GridListTile key={card.id} className={classes.card}>
          <Flashcard myFlashcards={card} />
        </GridListTile>
      ))}
    </Container>
  )
};
