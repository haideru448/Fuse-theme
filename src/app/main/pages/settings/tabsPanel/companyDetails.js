import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Details from './companyDetailForms/details';
import Address from './companyDetailForms/address';
import Defaults from './companyDetailForms/defaults';

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
        <Typography sx={{ mb: '20px', fontSize: '20px' }}>Company Details</Typography>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Address" {...a11yProps(1)} />
          <Tab label="Logo" {...a11yProps(2)} />
          <Tab label="Defaults" {...a11yProps(3)} />
          <Tab label="Documents" {...a11yProps(4)} />
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
