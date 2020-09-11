import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  category: {
    'font-size': 12
  },
  subject: {
    'font-size': 12
  },
  question: {
  },
}));

export default function Flashcard({ myFlashcards }) {
  const classes = useStyles();
  // wait for data
  if (!myFlashcards) { return <h1>no flashcard passed</h1> } else {
    // else data is loaded so therefor ready to create flashcard
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.category}>{
              myFlashcards.category}
            </Typography>
            <Typography className={classes.subject}>
              {myFlashcards.subject}
            </Typography>
            <Typography
            className={classes.question} component='h4' variant='h4'>
              {myFlashcards.question}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
