import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core'
import Header from "../header";
import { Toolbar } from '@material-ui/core'

function App() {

  return (
    <div className="App">
      <Header/>
      <Grid container direction="column">
        <Grid item>This is where the header will be</Grid>
        <Grid item container>
          <Grid xs={0} sm={2}/>
            <Grid xs={12} sm={8}>
                this is where the content will be
            </Grid>
          <Grid xs={0} sm={0}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
