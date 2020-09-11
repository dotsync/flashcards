import React, { useState } from 'react'

import MyCardsList from '../components/MyCardsList';

export default function Cards() {
  // default value is mock data
  const [flashcards, setFlashcards] = useState(MOCK_FLASHCARDS)
  return (
    <div>
      <h1>Cards</h1>
      <MyCardsList flashcards={flashcards}/>
    </div>
  )
}

// mock data

const MOCK_FLASHCARDS = [
  {
    id: 1,
    createdAt: "2018-8-3 11:12:40",
    category: 'math',
    subject: 'addition',
    question: 'what is 1 plus 2?', // 4
    answer: '3',
    multipleChoice: ['2', '3', '4', '5']
  },
  {
    id: 2,
    createdAt: "2020-1-1 10:11:40",
    category: 'math',
    subject: 'divison',
    question: 'what is 5 divided by 5?', // 10
    answer: '1',
    multipleChoice: ['.5', '10', '1', '2']
  },
  {
    id: 3,
    createdAt: "2016-8-3 11:12:40",
    category: 'math',
    subject: 'multiplication',
    question: 'what is 2 times 2?', // 4
    answer: '4',
    multipleChoice: ['2', '3', '4', '5']
  },
  {
    id: 4,
    createdAt: "1990-1-1 10:11:40",
    category: 'math',
    subject: 'subtraction',
    question: 'what is 15 - 5?', // 10
    answer: '10',
    multipleChoice: ['5', '10', '15', '20']
  }
];
