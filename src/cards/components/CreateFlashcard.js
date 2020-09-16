import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    'background-color': '#AFF9C9',
    border: '3px solid white',
    'padding-top': '10px',
    'padding-left': '5px',
    'padding-right': '5px',
    'border-radius': '25px',
    height: '200px',
    border: '3px solid black',
  },
  form: {
  },
  catagory: {
  },
  submit: {
    height: '55px',

  }

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
      <form className={classes.form}>
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
        <Button className={classes.submit}
          onClick={handleSubmission}
          variant="contained"
        >Add flashcard</Button>
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
      </form>
    </div>
  );
}
