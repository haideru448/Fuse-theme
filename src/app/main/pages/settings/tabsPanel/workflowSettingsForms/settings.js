import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';

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
        <InputLabel id="demo-simple-select-standard-label">Lock Invoices</InputLabel>
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
                <Box sx={{ display: 'flex' }}>
                  <EmailIcon />
                  <Typography sx={{ ml: '10px' }}>
                    Auto Email <br />
                    <span style={{ ...listFollowingTextStyles }}>
                      {' '}
                      Automatically email recurring invoices when they are created
                    </span>
                  </Typography>
                </Box>
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
