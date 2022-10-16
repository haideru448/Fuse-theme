import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';


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

export default function OutlinedCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ p: '10px', pl: '30px' }}>
        <FormControl sx={{ marginTop: '10px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '12px' }}>
            Layout
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Desktop" />

            <FormControlLabel value="male" control={<Radio />} label="Mobile" />
          </RadioGroup>
        </FormControl>{' '}
        <br />
        <FormControl sx={{ marginTop: '20px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '12px' }}>
            Menu Sidebar
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Collapse" />

            <FormControlLabel value="male" control={<Radio />} label="Float" />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl sx={{ marginTop: '20px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '12px' }}>
            History Sidebar
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Show/Hide" />

            <FormControlLabel value="male" control={<Radio />} label="Float" />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl sx={{ marginTop: '20px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '12px' }}>
            Click Selected
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Hide Preview" />

            <FormControlLabel value="male" control={<Radio />} label="Edit Record" />
          </RadioGroup>
        </FormControl>
      </Card>

      <Card variant="outlined" sx={{ p: '10px', pl: '30px', mt: '30px' }}>
        <Typography variant="h5">
          Persist UI{' '}<br/>
          <span style={{fontSize:'13px'}}>
            Save UI state Locally to enable the app to start at the last Location, disabling may
            improve performance
          </span>
        </Typography>
        <Switch {...label} defaultChecked />

        <Typography variant="h5">
          Persist UI{' '}<br/>
          <span style={{fontSize:'13px'}}>
            Save UI state Locally to enable the app to start at the last Location, disabling may
            improve performance
          </span>
        </Typography>
        <Switch {...label} defaultChecked />

      </Card>

      <Card variant="outlined" sx={{ p: '10px', pl: '30px', mt: '30px' }}>
        <Typography variant="h5">
          Refresh Data{' '}<br/>
          <span style={{fontSize:'13px'}}>
          Last Updated: a minute ago
          </span>
        </Typography>
        

        <Typography variant="h5">
          End All Sessions
          
        </Typography>
       

      </Card>
    </Box>
  );
}
