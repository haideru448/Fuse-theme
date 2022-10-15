import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import Cloud from '@mui/icons-material/Cloud';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
// import WalletIcon from '@mui/icons-material/Wallet';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PercentIcon from '@mui/icons-material/Percent';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CommitIcon from '@mui/icons-material/Commit';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BrushIcon from '@mui/icons-material/Brush';
import TitleIcon from '@mui/icons-material/Title';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import EmailIcon from '@mui/icons-material/Email';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import history from '@history';

// import { useNavigate } from 'react-router-dom';

export default function IconMenu() {
  // const history = useNavigate();
  return (
    <Paper sx={{ width: '100%', height: 'auto' }}>
      <Box sx={{ background: '#D3D3D3', display: 'flex', justifyContent: 'center' }}>
        <FormControl sx={{ m: 1, width: '80%' }} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-search'>Search</InputLabel>
          <OutlinedInput
            id='outlined-adornment-search'
            type='text'
            value=''
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' edge='end'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label='Search'
          />
        </FormControl>
      </Box>
      <MenuList>
        <MenuItem
          onClick={() => {
            history.push('dashboards/settings/1');
          }}>
          <ListItemIcon>
            <BusinessIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Company Details</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>User Details</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem onClick={() => history.push('dashboards/settings/2')}>
          <ListItemIcon>
            <LanguageIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Localization</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem onClick={() => history.push('dashboards/settings/3')}>
          <ListItemIcon>
            <WalletIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Online Payments</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem onClick={() => history.push('dashboards/settings/4')}>
          <ListItemIcon>
            <PercentIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Tax Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        {/* product settings */}

        <MenuItem onClick={() => history.push('dashboards/settings/5')}>
          <ListItemIcon>
            <ViewInArIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Product Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem onClick={() => history.push('dashboards/settings/6')}>
          <ListItemIcon>
            <AccessTimeIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Task Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem onClick={() => history.push('dashboards/settings/7')}>
          <ListItemIcon>
            <InsertDriveFileIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Expense Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <CommitIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Workflow Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ImportExportIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Import|Export</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <LaptopChromebookIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Device Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PersonPinIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Account Management</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          {/* <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Advance Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <BrushIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Invoice Design</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <TitleIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Custom Fields</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <FormatListNumberedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Generated Numbers</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>
        {/* email settings */}
        <MenuItem onClick={() => history.push('dashboards/settings/8')}>
          <ListItemIcon>
            <EmailIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Email Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize='small' />
          </ListItemIcon>
          <ListItemText>Client Portal</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <TouchAppIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Template and Reminders</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <JoinInnerIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Group Settings</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalMallIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Subscriptions</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GroupIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>User Management</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>

        <Divider />
        {/* <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem> */}
      </MenuList>
    </Paper>
  );
}
