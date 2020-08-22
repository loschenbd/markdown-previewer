import React from 'react';
import './App.css';
import Markdown from '../markdown'
import Header from "../header";



import { Grid, Button } from '@material-ui/core'

function App() {

  return (
    <div className="App">
      <Header/>

      <Grid container>
        <Grid item container>
          <Grid xs={0} sm={1}/>
            <Grid xs={12} sm={10}>
              <Markdown />
            </Grid>
          <Grid xs={0} sm={1}/>
        </Grid>
      </Grid>
      <Button variant="outlined" color="primary" target="_blank" href="https://github.com/loschenbd/markdown-previewer">View Codebase here</Button>
    </div>

  );
}

export default App;
