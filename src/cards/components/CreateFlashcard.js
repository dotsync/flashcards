import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '3px solid black',
  },
  form: {
    // border: '3px solid blue',
  },
  catagory: {
    // border: '3px solid red',
  },
}));
export default function CreateFlashcard() {
  const classes = useStyles();
  const [catagory, setCatagory] = useState('');
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCatagoryChange = (event) => {
    setCatagory(event.target.value);
  };

  const handleSubmission = (e) => {
    axios.post('http://localhost:3001/flashcards/list',
      {
        flashcardId: "99",
        createdAt: "Sun Sep 99 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
        category: "TESTDUMMY",
        subject: "Commonly asked JavaScript Interview Questions",
        question: "What is JavaScript(JS)?",
        answer: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        amountOfFlips: "0"
      }
    )
  }

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <form className={classes.form}>Form
        <TextField className={classes.catagory}
          required
          id="catagory"
          label="catagory"
          placeholder={catagory}
          multiline
          variant="outlined"
        />
        <TextField className={classes.subject}
          required
          id="subject"
          label="subject"
          // placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField className={classes.question}
          required
          fullWidth
          id="question"
          label="question"
          // placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField className={classes.answer}
          required
          fullWidth
          id="answer"
          label="answer"
          // placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <Button onClick={handleSubmission}>add flashcard</Button>
      </form>
    </div>
  );
}
