import React from 'react';
import {Grid, Paper, TextField, Typography, sizing} from '@material-ui/core'

const Markdown = () => {
  return (
    <div>
      <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Typography>HTML Output</Typography>
            <Paper variant="outlined">
              <TextField
                style= {{width: "100%"}}
                id="editor"
                label="Markdown Input"
                multiline
                rows={5}
                defaultValue="Enter Markdown"
                variant="outlined"
              />
            </Paper>
          </Grid>

        <Grid item sm={6} xs={12}>
          <Typography>HTML Output</Typography>
          <Paper id="preview" variant="outlined"  style={{width: "100%"}}>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Markdown