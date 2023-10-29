import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#477D47',
        },
        info: {
            main: 'rgb(242, 244, 275)'
        },
        background: {
            default: '#212121',
            paper: 'rgb(242, 244, 275)',
        }   
    }
})

export default theme;