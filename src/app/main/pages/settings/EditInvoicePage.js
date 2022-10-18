import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import history from '@history';
import Details from './tabsPanel/invoiceSettings/details';
import Address from './tabsPanel/invoiceSettings/address';
import Defaults from './tabsPanel/invoiceSettings/defaults';


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
          <Typography sx={{ mb: '20px', fontSize: '20px' }}>New Settings</Typography>
          {/* <Box>
            <Button>Save</Button>
            <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
          </Box> */}
        </Box>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Settings" {...a11yProps(0)} />
          <Tab label="Body" {...a11yProps(1)} />
          <Tab label="Header" {...a11yProps(2)} />
          <Tab label="Footer" {...a11yProps(3)} />
          <Tab label="Products" {...a11yProps(4)} />
          <Tab label="Includes" {...a11yProps(5)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Address />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Button variant="contained" fullWidth>
          <CloudUploadIcon sx={{ mr: '10px' }} />
          Upload Logo
        </Button>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Defaults />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Button variant="contained" fullWidth>
          <InsertDriveFileIcon sx={{ mr: '10px' }} />
          Upload File
        </Button>{' '}
      </TabPanel>
    </Box>
  );
}
;
