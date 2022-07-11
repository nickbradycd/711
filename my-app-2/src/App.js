import logo from './git.png';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';



function App() {
  return ( 
  
    <div className="App">
       
      <header className="App-header"> Hello There and Welcome!
      
        <img src={logo} className="App-logo" alt="logo" />
        
        <ButtonGroup style={{ backgroundColor: "#224771"}} variant="contained" aria-label="outlined primary button group">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab style={{ Color: 'black'}} 
          aria-label="Add" 
          href="https://google.com"
          target="_blank" 
          rel="noopener noreferrer">
            <AddIcon />
          </Fab>
        </Box>
 
        <Button 
        style={{ backgroundColor: "#224771"}}
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        
        >Github</Button>
        
        <Button 
        style={{ backgroundColor: "#224771"}}
        href="https://gitpod.io" 
        target="_blank" 
        rel="noopener noreferrer"
        >Gitpod</Button>
        
        <Button
        style={{ backgroundColor: "#224771"}} 
        href="https://reactjs.org" 
        target="_blank" 
        rel="noopener noreferrer"
        >React</Button>
      </ButtonGroup>
      </header>
      
    </div>
  );
}

export default App;
