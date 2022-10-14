import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const bull = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <>
    <CardContent>
      <TextField id='standard-basic' label='Name' variant='standard' fullWidth />
      <TextField id='standard-basic' label='ID Number' variant='standard' fullWidth />
      <TextField id='standard-basic' label='VAT Number' variant='standard' fullWidth />
      <TextField id='standard-basic' label='Website' variant='standard' fullWidth />
      <TextField id='standard-basic' label='Email' variant='standard' fullWidth />
      <TextField id='standard-basic' label='Phone' variant='standard' fullWidth />
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
);

const card2 = (
  <>
    <CardContent>
      <TextField id='standard-basic' label='Size' variant='standard' fullWidth />
      <TextField id='standard-basic' label='Industry' variant='standard' fullWidth />
     
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{card}</Card>
      <Card variant='outlined' sx={{marginTop:'20px'}}>{card2}</Card>

    </Box>
  );
}
