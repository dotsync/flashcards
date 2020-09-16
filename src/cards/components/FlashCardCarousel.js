import React from 'react'
import FlashcardsList from './FlashcardsList';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  'card-carousel-border': {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',

    margin: '5px',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '5px solid green',
    position: 'relative',
  },
  'grid-list': {
    // 'background-image': '/flashcardcaroselbackground.jpg',
    height: '30%',
    position: 'relative',
    // background: 'black',
    border: '3px solid black',
  },
}));

function FlashCardCarousel({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> } else {
    return (
        <GridList className={classes.["grid-list"]} >
          <FlashcardsList myFlashcards={myFlashcards} />

        </GridList>
    )
  }
}
export default FlashCardCarousel
