import React, { useState, useEffect } from 'react'

import FlashCardCarousel from '../components/FlashCardCarousel';

export default function Study() {
  const [myFlashcards, setMyFlashcards] = useState([])

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
    <div>
      <h1>Cards</h1>
      {console.log('myFlashcards', myFlashcards)}
      <FlashCardCarousel myFlashcards={myFlashcards}/>
    </div>
  )
}
