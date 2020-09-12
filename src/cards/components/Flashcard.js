import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
    width: '700px',
    'text-align': 'center',
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
    'text-align': 'center',
  },
  question: {
    'font-size': 30,
    'margin-top': '70px',
    'margin-bottom': '100px'
  },
  counter: {


  },
  border: {
    // width: '100%', /* Can be in percentage also. */
    // height: '100%',
    margin: '0 auto',
    padding: '10px',
    position: 'relative',
    overflow: 'auto',
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
        <Grid container spacing={4} className={classes.border}>
          <Grid item xs={1} className={classes.category}>
            Catagory: {myFlashcards.category}
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={1} className={classes.subject}>
            Subject: {myFlashcards.subject}
          </Grid>
        </Grid>
        <Button className={classes.answerButton} onClick={handleQuestionClick}>
          {!card ? setCard(myFlashcards.question) :
            <Grid item
              className={classes.question}>
              {card}
            </Grid>
          }
        </Button>
        <Grid container>
          <Grid item xs={12} className={classes.counter}>{count}</Grid>
        </Grid>
      </div>
    )
  }
}
