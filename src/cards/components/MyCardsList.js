import React from 'react'

import Flashcard from './Flashcard'

import { makeStyles } from '@material-ui/core/styles';
import { GridList, Grid } from '@material-ui/core/';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  cardCarousel: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: '#00BFFF',
    margin: '5px',
  },
  card: {
    background: 'white',
    margin: '5px',
    'border-radius': '25px'
  }
}));

export default function MyCardsList({ myFlashcards }) {
  const classes = useStyles();
  return (
    <div>
      {/* Create carousel for flashcards*/}
      <GridList className={classes.cardCarousel} cols={1.5}>
        {(myFlashcards !== undefined) && myFlashcards.map((card, i) => (
          // make a GridListTile for each flashcard
          <Grid container wrap='nowrap'>
            <GridListTile key={card.id} className={classes.card}>
              <Flashcard myFlashcards={card} />
            </GridListTile>
          </Grid>
        ))}
      </GridList>
    </div>
  )
}
