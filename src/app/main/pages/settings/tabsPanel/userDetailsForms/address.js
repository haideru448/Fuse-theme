import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const boxRowStyles = { background: 'none', justifyContent: 'space-between', width: '200px' };



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
      <Card variant="outlined" sx={{ p: '10px',pl:'30px' }}>
        <Typography variant="body1" color="initial" sx={{ textAlign: 'center' }}>
          Email
        </Typography>
        <Typography variant="body1" color="initial" sx={{ m: '30px 30px 20px 0' }}>
          All Events
        </Typography>{' '}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" color="initial">
            Invoice Created
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Invoice Sent
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Invoice Viewed
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Invoice Late
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Payment Success
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Payment Failure
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Quote Created
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Quote Sent
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Quote Viewed
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Quote Approved
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Quote Expired
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Credit Created
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Credit Sent
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
          <Typography variant="body1" color="initial">
            Credit Viewed
          </Typography>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{ ...boxRowStyles }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box sx={{ display: 'flex' }}>
                <DoNotDisturbAltIcon sx={{ mr: '5px' }} />
                Options
              </Box>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <SupervisedUserCircleIcon />
                All Record
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <AccountCircleIcon />
                Owner By User
              </MenuItem>

              <MenuItem onClick={handleClose} disableRipple>
                <DoNotDisturbAltIcon />
                None
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
