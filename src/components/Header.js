import { AppBar, createTheme, Container, Select, Toolbar, Typography } from '@material-ui/core'
import { MenuItem } from '@mui/material';
import React from 'react'
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './UserSidebar';

const useStyles = makeStyles(( )=> ({
  title:{
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}))

const Header = () => {

  const classes = useStyles() 
  const navigate = useNavigate()
  const {currency, setCurrency, user } = CryptoState()

  const darkTheme = createTheme({
    palette: {
      primary : {
        main : "#fff",
      },
      type: "dark",
    },
  });  

  return (
    <div>
      <ThemeProvider theme = {darkTheme}> 
      <AppBar color = 'transparent' position = 'static'>
        <Container>
          <Toolbar>
            <Typography
              onClick = {() => navigate("/")}
              variant = "h6"
              className={classes.title}>Crypto Tracker
              </Typography>
              <Select variant ="outlined" style = {{
                width: 100,
                height: 40,
                marginRight: 13
              }}
              value = {currency}
              onChange = {(e) => setCurrency(e.target.value)}
              >
              <MenuItem value = {'USD'}>USD</MenuItem>
              <MenuItem value = {'INR'}>INR</MenuItem>
            </Select>

            {user? <UserSidebar /> :<AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header
