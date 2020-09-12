import React from 'react'
import MyCardsList from './MyCardsList';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridList from '@material-ui/core/GridList';


const useStyles = makeStyles((theme) => ({
  cardCarousel: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: '#00BFFF',
    margin: '5px',
    height: '500px',
    justifyContent: 'space-around',
  },
}));

function FlashCardCarousel({ myFlashcards }) {
  const classes = useStyles();
  if (!myFlashcards) { return <div className='loading'>Loading flashcard Carousels</div> } else {
    return (
      <div>
        {/* Create carousel for flashcards*/}
        <GridList className={classes.cardCarousel} cols={1.5}>
          <Grid container>
            <Grid item xs={12}>
              <MyCardsList myFlashcards={myFlashcards} />
            </Grid>
          </Grid>
        </GridList>
      </div>
    )
  }
}
export default FlashCardCarousel
