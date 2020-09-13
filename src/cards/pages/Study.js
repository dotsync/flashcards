import React, { useState, useEffect } from 'react'

import FlashCardCarousel from '../components/FlashCardCarousel';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  study: {
    border: '3px solid red',
    width: '100%',
    height: '80%',
    margin: 'auto',
  }
}));

export default function Study() {
  const [myFlashcards, setMyFlashcards] = useState([])

  const classes = useStyles();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('http://localhost:3001/flashcards/list');
        console.log('response', response)
        const flashcards = await response.json();
        setMyFlashcards(flashcards);
      } catch (err) {
        console.log(`Uh-oh there was an error trying to receive the flashcards list: ${err}`);
      }
    }
    fetchReviews();
  }, []);


  return (
    <div className={classes.study}>
      <h1>Study</h1>
      {/**CreateFlashcard
       * will post a request with proper contents to the server,
       * The server has already been set up to respond, the are no requirments yet.
       * Input will be req.body. Output will be a success message */}
      {console.log('myFlashcards', myFlashcards)}
      <FlashCardCarousel myFlashcards={myFlashcards} />
    </div>
  )
}
