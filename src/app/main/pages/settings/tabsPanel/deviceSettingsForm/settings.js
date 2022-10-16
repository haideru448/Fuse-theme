import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';

import Switch from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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

// const card2 = (
//   <>
//     <CardContent>
//       <TextField id="standard-basic" label="First Name" variant="standard" fullWidth />

//       <TextField
//         id="standard-basic"
//         label="First Name"
//         variant="standard"
//         fullWidth
//         sx={{ mt: '20px' }}
//       />

//       <TextField
//         id="standard-basic"
//         label="Email"
//         variant="standard"
//         fullWidth
//         sx={{ mt: '20px' }}
//       />

//       <TextField
//         id="standard-basic"
//         label="Phone"
//         variant="standard"
//         fullWidth
//         sx={{ mt: '20px' }}
//       />

//       <TextField
//         id="standard-basic"
//         label="Password"
//         variant="standard"
//         fullWidth
//         sx={{ mt: '20px' }}
//       />

//       {/* <TextField id='standard-basic' label='Industry' variant='standard' fullWidth /> */}
//     </CardContent>
//     {/* <CardActions>
//       <Button size='small'>Learn More</Button>
//     </CardActions> */}
//   </>
// );

export default function OutlinedCard() {
  const [age, setAge] = useState('');
  const [secondary, setSecondary] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
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
                    <ListItemAvatar>
                      <EmailIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dark Mode"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
          <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
            <InputLabel id="demo-simple-select-standard-label">Status Color Theme</InputLabel>
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
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mt: '30px', p: '20px 20px' }}>
        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
          <InputLabel id="demo-simple-select-standard-label">Load Color Theme</InputLabel>
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

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Sidebar Active background color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Sidebar Active Font color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Sidebar Inactive background color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Sidebar Inactive font color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Invoice Header Background color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Invoice Header Font color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
            marginBottom: '30px',
          }}
        >
          <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
            Table Alternate Row Background color
          </Typography>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff0000"
            style={{ position: 'absolute', right: '10px', bottom: '5px', width: '30px' }}
          />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly',mt:'30px' }}>
          <Button variant="text" color="primary">
            Export Colors
          </Button>
          <Button variant="text" color="primary">
            Import Colors
          </Button>
        </Box>
      </Card>

      {/* <Button
        variant="contained"
        fullWidth
        sx={{ margin: '20px 10px 20px 0', pl: '20px', pr: '20px' }}
      >
        Email two Factor
      </Button> */}
      {/* <Card variant="outlined" sx={{ marginTop: '20px' }}>
        {card}
      </Card> */}
    </Box>
  );
}
