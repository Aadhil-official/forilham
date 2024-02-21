import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// import Search from '../../Images/Srch.png'
import SearchIcon from "@mui/icons-material/Search";
//import SearchIcon from '@mui/icons-material/Search';
//import SearchIcon from '@mui/icons-material/SearchOutlined';
import './Search.css';




function FreeSolo() {
  return (
    <div>
                
      <Stack spacing={2} className='stack'>
        <Autocomplete
          freeSolo
          id="Input"
          disableClearable
          options={CustomName.map((option) => option.title)}

          renderInput={(params) => (
            
            <TextField
              {...params}
              placeholder='Search'
              id='123'
              InputProps={{
                startAdornment: <SearchIcon />,
                type: 'search',
                style: { borderRadius: '100px' },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}

const CustomName = [];

export default FreeSolo;