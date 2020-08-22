import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



class Header extends React.Component {
  render() {

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <Typography>This is the AppBar</Typography>
          <AccountCircleIcon />
        </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header