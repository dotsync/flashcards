import React, { useState, useEffect } from 'react'

import FlashCardCarousel from '../components/FlashCardCarousel';
import CreateFlashcard from '../components/CreateFlashcard';

import { makeStyles } from '@material-ui/core/styles';
import image from './mosaic-2721425_1920.jpg'

const useStyles = makeStyles((theme) => ({
  study: {
    // border: '3px solid red',
    width: '100%',
    height: '100%',
    margin: 'auto',
    'background-image': `url(${image})`,
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
      <FlashCardCarousel myFlashcards={myFlashcards} />
      <CreateFlashcard />
    </div>
  )
}
