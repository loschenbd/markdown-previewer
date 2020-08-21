import React from 'react';
import './App.css';

import Box from '@material-ui/core/Box';

import BeepButton from '../button';


function App() {
  return (
    <div className="App">
      <Box>
        <BeepButton />
        <BeepButton />
        <BeepButton />
      </Box>
    </div>
  );
}

export default App;
