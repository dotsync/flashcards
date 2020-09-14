import React from 'react'
import FlashcardsList from './FlashcardsList';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  'card-carousel-border': {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: '#00BFFF',
    margin: '5px',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '5px solid black',
    position: 'relative',
  },
  'grid-list': {
    height: '95%',
    position: 'relative',
  },
}));

function FlashCardCarousel({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> } else {
    return (
      <div className={classes.["card-carousel-border"]}>Flashcards list
        {/* Create carousel for flashcards*/}
        <GridList className={classes.["grid-list"]} cols={1.5}>
          <FlashcardsList myFlashcards={myFlashcards} />
        </GridList>
      </div>
    )
  }
}
export default FlashCardCarousel
