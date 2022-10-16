import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const bull = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);
function generate(element) {
  return [0, 1].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const listFollowingTextStyles = {
  color: '#D3D3D3',
  fontSize: '12px',
};

const dense = false;

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const card = (
  <>
    <CardContent>
    <Grid item xs={12} md={6}>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge='end' aria-label='delete'>
                    <Switch {...label} defaultChecked />
                  </IconButton>
                }>
                <Box sx={{ display: 'flex' }}>
                  <ContactPageIcon />
                  <Typography sx={{ ml: '10px' }}>
                    Auto Convert <br />
                    <span style={{ ...listFollowingTextStyles }}>
                      {' '}
                      Automatically convert a quote to an invoice when approved by client
                    </span>
                  </Typography>
                </Box>
              </ListItem>,
            )}
          </List>
        </Demo>
      </Grid>
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
);

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

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  );
}
