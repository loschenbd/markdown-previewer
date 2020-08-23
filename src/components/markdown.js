import React from 'react';
import {Grid, Paper, TextField, Typography, sizing} from '@material-ui/core'
let marked = require("marked");


class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
    };
  };
  updateInput(markdown) {
    this.setState({ markdown })
  }
  render() {
    return (

      <div>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Typography>HTML Output</Typography>
            <Paper variant="outlined">
              <TextField
                style={{width: "100%", minHeight: 600}}
                id="editor"
                label="Markdown Input"
                multiline
                rows={30}
                defaultValue="Enter Markdown"
                value={this.state.markdown}
                variant="outlined"
                onChange={(e) => {
                  this.updateInput(e.target.value);
                }}
              />
              {console.log(this.state.markdown)}
            </Paper>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Typography>HTML Output</Typography>
            <Paper id="preview" variant="outlined" style={{width: "100%", minHeight: 600}}>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default Markdown