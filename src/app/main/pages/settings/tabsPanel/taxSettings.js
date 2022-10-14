import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import PercentIcon from '@mui/icons-material/Percent';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import Switch from '@mui/material/Switch';

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

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ background: '#D3D3D3' }}>
        <Typography variant="h6" sx={{ padding: '20px' }} component="div">
          Tax Settings
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ m:'20px 20px 20px 20px' }}>
        {' '}
        <CardContent>
          <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
            <InputLabel id="demo-simple-select-standard-label">Invoice Tax Rates</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
            <InputLabel id="demo-simple-select-standard-label">Item Tax Rates</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

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
                    <ListItemAvatar>
                      <PercentIcon />
                    </ListItemAvatar>
                    <Typography>
                      Inclusive Taxes <br />
                      Exclusive: 100+10% =100 + 10<br />
                      Inclusive: 100+10% =90.91 + 9.09

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
        Confirm Gateways
      </Button>
    </Box>
  );
}
