// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from "./Home";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  Divider,
  DialogActions,
} from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

//https://stackoverflow.com/questions/55781090/styles-withstyles-defaulttheme-option-cant-set-custom-theme
const theme = createTheme({
  palette: {
    primary: { main: purple[500] },
  },
});

// function App() {
function App(){
  return ( 
    <>
      
      {/* <Button color="primary">example</Button> */}
      <Home open={true} onClose={()=>{}}></Home>
       
   </>
  );
}



export default App;
