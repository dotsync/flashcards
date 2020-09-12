import React, { useState, useEffect } from 'react'

import FlashCardCarousel from '../components/FlashCardCarousel';

export default function Cards() {
  const [myFlashcards, setMyFlashcards] = useState([])

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('http://localhost:3001/flashcards/list');
        console.log('response', response)
        const flashcards = await response.json();
        setMyFlashcards(flashcards);
        console.log('flashcards', flashcards)
      } catch (err) {
        console.log(`Uh-oh there was an error trying to receive the flashcards list: ${err}`);
      }
    }
    // call immediatly
    fetchReviews();
  }, []);


  return (
    <div>
      <h1>Cards</h1>
      <FlashCardCarousel myFlashcards={myFlashcards}/>
    </div>
  )
}
