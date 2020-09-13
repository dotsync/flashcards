import React from 'react'
import FlashcardsList from './FlashcardsList';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  cardCarousel: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: '#00BFFF',
    margin: '5px',
    height: '460px',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 'sm'
  },
  border: {
    display: 'flex',
    'justify-content': 'center',
    border: '3px solid green',
  }
}));

function FlashCardCarousel({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> } else {
    return (
      <div> welcome
        {/* Create carousel for flashcards*/}
        <GridList className={classes.cardCarousel} cols={1.5}>
          <Grid container spacing={6}><h3>My flashcard stack 001 - september 11th</h3>
            <Grid item xs={12} className={classes.border}>
              <FlashcardsList myFlashcards={myFlashcards} />
            </Grid>
          </Grid>
        </GridList>
      </div>
    )
  }
}
export default FlashCardCarousel
