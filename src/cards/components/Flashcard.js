import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
    width: '700px',
    // border: '3px solid red',
  },
  category: {
    // border: '3px solid green',
    width: '100%',
  },
  subject: {
    // border: '3px solid green',
    position: 'absolute',
  },
  answerButton: {
    display: 'flex',
    'justify-content': 'center',
    // border: '3px solid green',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  question: {
    // 'font-size': 20,
    // 'margin-top': '70px',
    // 'margin-bottom': '100px'
  },
  counter: {
    'texr-align': 'bottom'
  },
  topBar: {
    display: 'flex',
    'justify-content': 'center',
    // border: '3px solid red',
    position: 'relative',
    height: '20%',
    width: '100%',
  }
}));

export default function Flashcard({ myFlashcards }) {
  const classes = useStyles();
  const [count, setCount] = useState(0)
  const [questionAsked, setQuestionAsked] = useState(true)
  // const [myCard, setMyCard] = useState(myFlashcards.question)
  const [card, setCard] = useState(myFlashcards.question)

  const handleQuestionClick = () => {
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

        <Grid container className={classes.topBar}>
          <Grid item xs={1} className={classes.category}>
            Catagory: {myFlashcards.category}
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={1} className={classes.subject}>
            Subject: {myFlashcards.subject}
          </Grid>
        </Grid>

        <Grid container>
          <Button className={classes.answerButton} onClick={handleQuestionClick}>
            {!card ? setCard(myFlashcards.question) :
              <Grid item
                className={classes.question}>
                {card}
              </Grid>}
          </Button>
        </Grid>

        <Grid container>
          <Grid item xs={12} className={classes.counter}><u>You flipped the card this many times:</u> {count}</Grid>
        </Grid>
      </div>
    )
  }
}
