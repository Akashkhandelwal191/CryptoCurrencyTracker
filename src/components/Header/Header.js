import React from 'react';
import { AppBar, MenuItem, Select, Toolbar, Typography,createTheme,ThemeProvider} from '@mui/material';
import { Container } from '@mui/system';
import './Header.css';
import {useNavigate} from 'react-router-dom';
import { CryptoState } from '../../CryptoContext';

const Header = () => {
 
  const navigate = useNavigate();

  const {currency,setCurrency} = CryptoState();
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary:{
        main: "#fff",
      },
      mode:"dark"  
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
            <Typography className="title" onClick={()=> navigate('/')} variant='h6'>Crypto Tracker</Typography>

            <Select variant='outlined' style={{
              width:100,
              height:40,
              marginRight:15,
             
            }}
            value={currency}
            onChange={(e)=> setCurrency(e.target.value)}
            >
               <MenuItem value={'USD'}>USD</MenuItem>
               <MenuItem value={'INR'}>INR</MenuItem>
   
            </Select>
        </Toolbar> 
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header;
