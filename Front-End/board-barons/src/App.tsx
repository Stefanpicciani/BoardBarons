import React from 'react';
import './App.css';
import TemplateDefault from './components/templates/TemplateDedault';
import SignIn from './components/signin/Signin';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import SignUpSide from './components/signup/Signup';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TemplateDefault>
          <SignIn/>            
          {/* <SignUpSide/> */}
        </TemplateDefault> 
      </ThemeProvider>
     
    </div>
  );
}

export default App;
