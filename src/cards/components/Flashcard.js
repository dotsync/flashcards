import React, { useState } from 'react'

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
  counter: {

  }
}));

export default function Flashcard({ myFlashcards }) {
  const classes = useStyles();
  const [count, setCount] = useState(0)
  const [questionAsked, setQuestionAsked] = useState(true)
  // const [myCard, setMyCard] = useState(myFlashcards.question)
  const [card, setCard] = useState(myFlashcards.question)

  const handleQuestionClick = () => {
    // e.preventDefault();
    if (questionAsked === true) {
      setCount(count + 1);
      setCard(myFlashcards.answer)
      setQuestionAsked(false);
    } else {
      setQuestionAsked(true)
      setCard(myFlashcards.question)
    }
  }
  // check for data
  if (!myFlashcards) { return <div>no flashcard passed</div> } else {
    // else create flashcard with data
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
            <Button className={classes.answerButton} onClick={handleQuestionClick}>
              {!card ? setCard(myFlashcards.question) :
              <Grid
                className={classes.question}>
                {card}
              </Grid>
  }
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.counter}>{count}</Grid>
        </Grid>
      </div>
    )
  }
}
