import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '3px solid black',
  },
  form: {
    // border: '3px solid blue',
  },
  catagory: {
    border: '3px sold red',
  },
}));
export default function CreateFlashcard() {
  const classes = useStyles();
  const [value, setValue] = React.useState('hello world');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <form className={classes.form}>Form
        <TextField className={classes.catagory}
          id="catagory"
          label="catagory"
          // placeholder="Placeholder"
          multiline
          variant="outlined"
        />
      </form>
    </div>
  );
}
