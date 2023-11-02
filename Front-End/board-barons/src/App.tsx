import './App.css';
import TemplateDefault from './components/templates/TemplateDedault';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes/routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TemplateDefault>
           <RouterProvider router={Routes}/>
        </TemplateDefault> 
      </ThemeProvider>
     
    </div>
  );
}

export default App;
