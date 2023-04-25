import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//! Theme for MUI styling
const theme = createTheme({
  palette: {
    primary: {
      main: '#148896',
    },
    secondary: {
      main: '#00b862',
    },
  }
});

function App() {



  //! What will display on the DOM
  return (
    <ThemeProvider theme={theme}>

      <div className='App'>
        <Router>

          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>

          <Route exact path="/">
            <Feeling />
          </Route>

          <Route exact path="/understanding">
            <Understanding />
          </Route>

          <Route exact path="/support">
            <Support />
          </Route>

          <Route exact path="/comments">
            <Comments />
          </Route>

          <Route exact path="/review">
            <Review />
          </Route>

          <Route exact path="/success">
            <Success />
          </Route>

        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
