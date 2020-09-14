import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
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
  submit :{
    width: '100%',
    height: '100%',
  },
}));
export default function CreateFlashcard() {
  const classes = useStyles();
  const [catagory, setCatagory] = useState('');
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCatagoryChange = (e) => {
    setCatagory(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmission = (e) => {
    if (catagory.length < 3 || subject.length < 3 || question.length < 5 || answer.length < 10) {
      console.log('FLASHCARD COULD NOT POST BECAUSE A TEXT FIELD WAS TOO SHORT')
      return;
    }
    axios.post('http://localhost:3001/flashcards/list',
      {
        catagory,
        subject,
        question,
        answer,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <form className={classes.form}>Form
        <TextField className={classes.catagory}
          required
          id="catagory"
          label="catagory"
          value={catagory}
          onChange={handleCatagoryChange}
          multiline
          variant="outlined"
        />
        <TextField className={classes.subject}
          required
          id="subject"
          label="subject"
          value={subject}
          onChange={handleSubjectChange}
          multiline
          variant="outlined"
        />
        <TextField className={classes.question}
          required
          fullWidth
          id="question"
          label="question"
          value={question}
          onChange={handleQuestionChange}
          multiline
          variant="outlined"
        />
        <TextField className={classes.answer}
          required
          fullWidth
          id="answer"
          label="answer"
          value={answer}
          onChange={handleAnswerChange}
          multiline
          variant="outlined"
        />
        <Button className={classes.submit}
          onClick={handleSubmission}
          variant="contained"
          color="secondary"
        >Add flashcard</Button>
      </form>
    </div>
  );
}
