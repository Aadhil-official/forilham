import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
// red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey
import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    secondary: teal,
  },
});

function Button1(btnname) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="secondary">
        {btnname.name}
      </Button>
    </ThemeProvider>
  );
}


export default Button1;
