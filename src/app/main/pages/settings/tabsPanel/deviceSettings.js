import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import history from '@history';
import Settings from './deviceSettingsForm/settings';
import Address from './deviceSettingsForm/address';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          background: '#D3D3D3',
          pl: '20px',
          pt: '10px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: '20px', fontSize: '20px' }}>User Details</Typography>
          <Box>
            <Button>Save</Button>
            <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
          </Box>
        </Box>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} sx={{ width: '50%' }} />
          <Tab label="Notifications" {...a11yProps(1)} sx={{ width: '50%' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Address />

      </TabPanel>
      <TabPanel value={value} index={1}>
      <Settings />

      </TabPanel>
    </Box>
  );
}
