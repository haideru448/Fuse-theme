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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import Switch from '@mui/material/Switch';
import history from '@history';
import TextField from '@mui/material/TextField';
import ImportExportIcon from '@mui/icons-material/ImportExport';

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
  return [0, 1].map((value) =>
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
            Import | Export
          </Typography>
          <Box>
            <Button>Save</Button>
            <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Card variant='outlined' sx={{ m: '20px 20px' }}>
          {' '}
          <CardContent>
            <FormControl variant='standard' sx={{ width: '100%', mb: '20px' }}>
              <InputLabel id='demo-simple-select-standard-label'>Import Type</InputLabel>
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
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Clients' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>

            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Invoices' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Payments' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Products' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Vendors' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <TextField value='No File Selected' id='standard-basic' label='Expenses' variant='standard' fullWidth />
              <Button
                variant='contained'
                component='label'
                sx={{ minWidth: 'max-content', position: 'relative', top: '10px' }}>
                Upload File
                <input type='file' hidden />
              </Button>
            </Box>

            <Button variant='contained' fullWidth sx={{ margin: '20px 10px 20px 0' }}>
              <ImportExportIcon sx={{ mr: '10px' }} />
              Import
            </Button>

        
          </CardContent>
        </Card>

        <Card sx={{ m: '20px 20px' }} >
          <CardContent>
            <Button variant='contained' fullWidth sx={{ margin: '20px 10px 20px 0' }}>
              <ImportExportIcon sx={{ mr: '10px' }} />
              Export
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
