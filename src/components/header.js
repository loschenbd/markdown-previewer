import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt';



class Header extends React.Component {
  render() {

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <Typography>Markdown Previewer</Typography>
          <ListAltIcon />
        </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header