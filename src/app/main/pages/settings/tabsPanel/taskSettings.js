import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';


const listFollowingTextStyles = {
  color: '#D3D3D3',
  fontSize: '12px',
};

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

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
  return [0, 1].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
function generate2(element) {
  return [0, 1,3,4].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TaxSettings() {
  const [age, setAge] = useState('');
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ background: '#D3D3D3' }}>
        <Typography variant="h6" sx={{ padding: '20px' }} component="div">
          Product Settings
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
        {' '}
        <CardContent>
        <TextField id='standard-basic' label='Default Task Rate' variant='standard' fullWidth />
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
                  >
                    <Typography>
                      Show Product Discount <br />
                      <span style={{ ...listFollowingTextStyles }}>
                        {' '}
                        Display a Line Item discount field
                      </span>
                    </Typography>
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
        {' '}
        <CardContent>
          <Grid item xs={12} md={6}>
            <Demo>
              <List dense={dense}>
                {generate2(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <Switch {...label} defaultChecked />
                      </IconButton>
                    }
                  >
                    <Typography>
                      Show Product Discount <br />
                      <span style={{ ...listFollowingTextStyles }}>
                        {' '}
                        Display a Line Item discount field
                      </span>
                    </Typography>
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
        </CardContent>
      </Card>

      <Button variant="contained" fullWidth sx={{ margin: '20px 10px 20px 0' }}>
        <SettingsIcon sx={{ mr: '10px' }} />
        Confirm Statuses
      </Button>
    </Box>
  );
}
