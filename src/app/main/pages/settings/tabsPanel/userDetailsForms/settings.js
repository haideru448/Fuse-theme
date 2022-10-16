import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Select from '@mui/material/Select';

function generate(element) {
  return [0, 1].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const listFollowingTextStyles = {
  color: '#D3D3D3',
  fontSize: '12px',
};

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <>
    <CardContent>
    <TextField
        id="standard-basic"
        label="Accent Color"
        variant="standard"
        fullWidth
        sx={{ mt: '20px' }}
      />
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
);
const dense = false;

const card2 = (
  <>
    <CardContent>
      <TextField id="standard-basic" label="First Name" variant="standard" fullWidth />

      <TextField
        id="standard-basic"
        label="First Name"
        variant="standard"
        fullWidth
        sx={{ mt: '20px' }}
      />

      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        fullWidth
        sx={{ mt: '20px' }}
      />

      <TextField
        id="standard-basic"
        label="Phone"
        variant="standard"
        fullWidth
        sx={{ mt: '20px' }}
      />

      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        fullWidth
        sx={{ mt: '20px' }}
      />

   

      {/* <TextField id='standard-basic' label='Industry' variant='standard' fullWidth /> */}
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card2}</Card>

      <Button variant="contained" fullWidth sx={{ margin: '20px 10px 20px 0',pl:'20px',pr:'20px' }}>
        
          Email two Factor
        </Button>
      <Card variant="outlined" sx={{ marginTop: '20px' }}>
        {card}
      </Card>
    </Box>
  );
}
