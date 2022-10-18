import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import history from '@history';
import Stripe from './onlinePaymentForms/stripeGateway';
import Mollie from './onlinePaymentForms/mollieGateway';
import Paypal  from './onlinePaymentForms/paypalGateway';
import Payoneer  from './onlinePaymentForms/payoneerGateway';
import Razor  from './onlinePaymentForms/razorpayGateway';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ background: '#D3D3D3' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: '20px', fontSize: '20px', pl: '20px', pt: '20px' }}>
            Payment Gateway
          </Typography>
          <Box>
            <Button>Save</Button>
            <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
          </Box>
        </Box>

        <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
          <Tab label="Stripe" {...a11yProps(0)} />
          <Tab label="Mollie" {...a11yProps(1)} />
          <Tab label="Paypal" {...a11yProps(2)} />
          <Tab label="Razor Pay" {...a11yProps(3)} />
          <Tab label="Payoneer" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stripe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Mollie />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Paypal />
      </TabPanel>
      
      <TabPanel value={value} index={3}>
        <Payoneer />
      </TabPanel>
      
      <TabPanel value={value} index={4}>
        <Razor />
      </TabPanel>
    </Box>
  );
}
