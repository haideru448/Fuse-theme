import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <>
    <CardContent>
      <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
        <InputLabel id="demo-simple-select-standard-label">Invoice Design</InputLabel>
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
        <InputLabel id="demo-simple-select-standard-label">Quote Design</InputLabel>
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
        <InputLabel id="demo-simple-select-standard-label">Credit Design</InputLabel>
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
        <InputLabel id="demo-simple-select-standard-label">Page Layout</InputLabel>
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
        <InputLabel id="demo-simple-select-standard-label">Page Size</InputLabel>
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
        <InputLabel id="demo-simple-select-standard-label">Font Size</InputLabel>
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

const card2 = (
  <>
    <CardContent>
      <TextField id="standard-basic" label="Size" variant="standard" fullWidth />
      {/* <TextField id='standard-basic' label='Industry' variant='standard' fullWidth /> */}
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </>
);

const card3 = (
  <>
    <CardContent>
      <Box sx={{ display: 'flex', mb: '30px' }}>
        <TextField id="standard-basic" label="Primary Font" variant="standard" fullWidth />

        <Button size="small" sx={{ color: 'blueviolet', minWidth: 'max-content' }}>
          Learn More
        </Button>
      </Box>

      <TextField
        id="standard-basic"
        label="Secondary Font"
        variant="standard"
        fullWidth
        sx={{ mb: '30px' }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
          marginBottom: '30px',
        }}
      >
        <Typography sx={{ fontSize: '13px', mb: '30px', fontColor: 'rgba(0, 0, 0, 0.42)' }}>
          Primary color
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
          Secondary color
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
      <Card variant="outlined" sx={{ marginTop: '20px', mb: '30px' }}>
        {card2}
      </Card>
      <Card variant="outlined" sx={{ mb: '30px' }}>
        {card}
      </Card>
      <Card variant="outlined" sx={{ mb: '30px' }}>
        {card3}
      </Card>
    </Box>
  );
}
