import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

// const card2 = (
//   <>
//     <CardContent>
//       <TextField id='standard-basic' label='Size' variant='standard' fullWidth />
//       <TextField id='standard-basic' label='Industry' variant='standard' fullWidth />

//     </CardContent>
//     {/* <CardActions>
//       <Button size='small'>Learn More</Button>
//     </CardActions> */}
//   </>
// )

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function OutlinedCard() {
  const [age, setAge] = useState('');
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Card variant="outlined" sx={{ m: '20px 20px' }}>
      {' '}
      <CardContent>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Switch {...label} defaultChecked />
                    </IconButton>
                  }
                  sx={{ pl: '0' }}
                >
                  <ListItemText
                    primary="Activation"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>

        <TextField
          id="standard-basic"
          label="Mollie Key"
          variant="standard"
          fullWidth
          sx={{ mb: '20px' }}
        />
        <TextField
          id="standard-basic"
          label="Mollie Secret"
          variant="standard"
          fullWidth
          sx={{ mb: '20px' }}
        />
        <TextField
          id="standard-basic"
          label="Sandbox Activation"
          variant="standard"
          fullWidth
          sx={{ mb: '20px' }}
        />

        <Grid item xs={12} md={6} sx={{ mb: '20px' }}>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Switch {...label} defaultChecked />
                    </IconButton>
                  }
                  sx={{ pl: '0' }}
                >
                  <ListItemText
                    primary="Sandbox Activation"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </CardContent>
    </Card>
  );
}
