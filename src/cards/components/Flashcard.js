import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    'flex-flow': 'column',
    height: '300px',
    width: '300px',
    'text-align': 'center',
    margin: '10px',
  },
  category: {
    'font-size': 12,
  },
  subject: {
    'font-size': 12,
  },
  answerButton: {
    'border-radius': '25px',
    'border-style': 'thin',
    'border-width': '5px',
  },
  question: {
    'font-size': 30,
  },
}));

export default function Flashcard({ myFlashcards }) {
  const classes = useStyles();
  // wait for data
  if (!myFlashcards) { return <div>no flashcard passed</div> } else {
    // else data is loaded so therefor ready to create flashcard
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <div className={classes.category}>Catagory: {
              myFlashcards.category}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.subject}>Subject: {
            myFlashcards.subject}
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Button className={classes.answerButton}>
              <Grid
                className={classes.question} component='h4' variant='h4'>
                {myFlashcards.question}
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} >Times visited: {0}</Grid>
        </Grid>
      </div>
    )
  }
}
/**Notes
 * 1. Use material ui transitions for showing hints
 * After reading docs need to  refactor because cards cant be flipped
 *
 * need to render answers
 *
 *
 *
 *
 *
 */
