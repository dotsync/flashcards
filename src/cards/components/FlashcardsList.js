import React from 'react';

import Flashcard from './Flashcard';

import { makeStyles } from '@material-ui/core/styles';
import { GridListTile, Grid } from '@material-ui/core/';
// import image from './flashcardcaroselbackground.jpg'

const useStyles = makeStyles((theme) => ({
  border: {
    width: '50%',
  },
  card: {
  },
}));

export default function MyCardsList({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> }
  return (
    <div item className={classes.border}>
      {(myFlashcards !== undefined) && myFlashcards.map((card, i) => (
        // generate a GridListTile for each flashcard
        <GridListTile key={card._id} className={classes.card}>
          <Flashcard myFlashcards={card} />
        </GridListTile>
      ))}
    </div>
  )
};
