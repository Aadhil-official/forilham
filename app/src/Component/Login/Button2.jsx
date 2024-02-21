import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
// red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey
import Button from '@mui/material/Button';




function Button1(name) {
  return (
    <div className='button'>
      <Button variant="contained">
        {name.name}
      </Button>
    </div>
  );
}


export default Button1;
