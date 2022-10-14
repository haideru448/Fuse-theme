import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
      
    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
        <InputLabel id="demo-simple-select-standard-label">First Month of the Year</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
      <TextField id="standard-basic" label="Currency" variant="standard" fullWidth />
      <FormControl sx={{ marginTop: '10px' }}>
        <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '12px' }}>
          Currency Format
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Symbol: $1,000.00" />
          <FormControlLabel value="male" control={<Radio />} label="Code: $1,000.00 USD" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ display: 'flex' }}>
        <TextField id="standard-basic" label="Language" variant="standard" fullWidth />

        <Button size="small" sx={{ color: 'blueviolet', minWidth: 'max-content' }}>
          Help Translate
        </Button>
      </Box>

      <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
        <InputLabel id="demo-simple-select-standard-label">Timezone</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
        <InputLabel id="demo-simple-select-standard-label">Date Format</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
                <Typography>
                  Military Time <br />
                  <span style={{ ...listFollowingTextStyles }}> Decimal Comma</span>
                </Typography>
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>

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
      <Card variant="outlined" sx={{ marginTop: '20px' }}>
        {card}
      </Card>
    </Box>
  );
}
