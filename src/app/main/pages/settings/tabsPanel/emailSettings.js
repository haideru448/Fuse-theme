import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import history from '@history';

const bull = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
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
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function OutlinedCard() {
  const [age, setAge] = useState('');
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ background: '#D3D3D3' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: '20px', fontSize: '20px', paddingLeft: '20px', paddingTop: '10px' }}>
            Email Settings
          </Typography>
          <Box>
            <Button>Save</Button>
            <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ minWidth: 275, pl: '20px', mt: '20px', pr: '20px' }}>
        <Card variant='outlined'>
          {' '}
          <CardContent>
            <TextField id='standard-basic' label='From Name' variant='standard' fullWidth sx={{ mb: '20px' }} />

            <TextField id='standard-basic' label='Reply-To Name' variant='standard' fullWidth sx={{ mb: '20px' }} />

            <TextField id='standard-basic' label='Reply-To Email' variant='standard' fullWidth sx={{ mb: '20px' }} />

            <TextField id='standard-basic' label='BCC Email' variant='standard' fullWidth sx={{ mb: '20px' }} />

            <TextField id='standard-basic' label='Send Time' variant='standard' fullWidth sx={{ mb: '20px' }} />
          </CardContent>
        </Card>

        <Card variant='outlined' sx={{ mt: '20px' }}>
          {' '}
          <CardContent>
            <FormControl variant='standard' sx={{ width: '100%' }}>
              <InputLabel id='demo-simple-select-standard-label'>Email Design</InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={age}
                onChange={handleChange}
                label='Age'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id='standard-basic'
              label='Email Signature'
              variant='standard'
              fullWidth
              InputProps={{ sx: { height: 130 } }}
            />
          </CardContent>
        </Card>

        <Grid item xs={12} md={6} sx={{ mt: '20px' }}>
          <Demo>
            <List dense={dense} sx={{ pt: '30px', pb: '30px' }}>
              {generate(
                <ListItem
                  sx={{ pt: '20px', pb: '20px' }}
                  secondaryAction={
                    <IconButton edge='end' aria-label='delete'>
                      <Switch {...label} defaultChecked />
                    </IconButton>
                  }>
                  <ListItemAvatar>
                    <EmailIcon />
                  </ListItemAvatar>
                  <ListItemText primary='Attach PDF' secondary={secondary ? 'Secondary text' : null} />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Box>
    </Box>
  );
}
