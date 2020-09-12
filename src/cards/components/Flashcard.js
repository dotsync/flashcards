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
  const [cardFlipped, setMyCardFlipped] = useState(true)
  // const [myCard, setMyCard] = useState(myFlashcards.question)


  // check for data
  if (!myFlashcards) { return <div>no flashcard passed</div> }
  // data has been recieved, set
  const handleQuestionClick = (e) => {
    // e.preventDefault();
    if (cardFlipped === true) {
      setCount(count + 1);
      // UPDATE api
      // flip card
      setMyCardFlipped(false);
      //setMyCard(myFlashcards.answer)
    } else {
      // don't increase count of looks and flip to question side
      setMyCardFlipped(true)
      //setMyCard(myFlashcards.question)
    }
    console.log(cardFlipped)
  }

  // wait for data
  // if (!myFlashcards) { return <div>no flashcard passed</div> } else {
  // let myCard = myFlashcards.question

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
          <Button className={classes.answerButton} onClick={handleQuestionClick}>
            <Grid
              className={classes.question}>
              {myFlashcards.question}
            </Grid>
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.counter}>{count}</Grid>
      </Grid>
    </div>
  )
  // }
}
/**Notes
 * 1. Use material ui transitions for showing hints
 * After reading docs need to  refactor because cards cant be flipped
 *
 * need to render answers
 */
