import React from 'react';
import './App.css';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import BeepButton from '../button';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloThereStyle} variant="h1" color="primary">
        Hello There
      </Typography>


      <Box>
        <BeepButton />
        <BeepButton />
        <BeepButton />
      </Box>
    </div>
  );
}

export default App;
