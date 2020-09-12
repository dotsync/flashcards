import React from 'react'

import Flashcard from './Flashcard'

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  card: {
    background: 'white',
    margin: '5px',
    'border-radius': '25px',
  },
}));

export default function MyCardsList({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> }
  return (
    <div><h4>scroll down!</h4>
      {(myFlashcards !== undefined) && myFlashcards.map((card, i) => (
        // generate a GridListTile for each flashcard
        <GridListTile key={card.id} className={classes.card}>
          <Flashcard myFlashcards={card} />
        </GridListTile>
      ))}
    </div>
  )
};
