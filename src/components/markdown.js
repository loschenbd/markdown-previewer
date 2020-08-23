import React from 'react';
import {Grid, Paper, TextField, Typography } from '@material-ui/core'
const marked = require("marked");
marked.setOptions({
  breaks: true
})


class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: `
# Heading 1

## Heading 2

[View Codebase](https://loschenbd.github.io/markdown-previewer/)

\` let inlineCode = "look, inline code" \`

\`\`\`
var add2 = function(number) {
  return number + 2;
}
\`\`\`

- First Item
- Second Item
- 3rd Item

> “When you no longer resist a powerful emotion like fear,” he continued, “you're free to channel that energy in a more constructive direction. When you hire your problems as bodyguards, they show you how powerful your mind is. Their very fierceness makes you aware of how strong you are.”

![flux logo](https://uploads-ssl.webflow.com/5d5421282086e70dcd3289a4/5d94e2d7d4118f80b8c718a9_Group%2073x.png)

***Some bold text***

`
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
            <Typography>Markdown Input</Typography>
            <Paper variant="outlined">
              <TextField
                style={{width: "100%", minHeight: 600}}
                id="editor"
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
            <Paper variant="outlined" style={{width: "100%", minHeight: 600, overflow: "hidden"}}>
              <div  id="preview" style={{margin: 10}} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default Markdown