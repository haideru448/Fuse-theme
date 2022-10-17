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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

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

const card = (
    <>
        <CardContent>
            <TextField id='standard-basic' label='Domain URL' variant='standard' fullWidth />
        </CardContent>
    </>
);

const card2 = (
    <>
        <CardContent>
            <TextField id='standard-basic' label='Terms of Service' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Privacy Policy' variant='standard' fullWidth />
        </CardContent>
    </>
);

const card3 = (
    <>
        <CardContent>
            <TextField id='standard-basic' label='Dashboard' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Unpaid Invoice' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Paid Invoice' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Unapproved Quote' variant='standard' fullWidth />
        </CardContent>
    </>
);
const card4 = (
    <>
        <CardContent>
            <TextField id='standard-basic' label='Header' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Footer' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Custom CSS' variant='standard' fullWidth />
            <TextField id='standard-basic' label='Custom Javascript' variant='standard' fullWidth />
        </CardContent>
    </>
);

function generate(element) {
    return [0, 1, 2, 3].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );
}

const listFollowingTextStyles = {
    color: '#D3D3D3',
    fontSize: '12px',
};

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function clientPortal() {

    const [value, setValue] = React.useState(0);
    const [dense, setDense] = React.useState(false);
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
                    <Typography sx={{ mb: '20px', fontSize: '20px' }}>Client Portal</Typography>
                    <Box>
                        <Button>Save</Button>
                        <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
                    </Box>
                </Box>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Settings" {...a11yProps(0)} />
                    <Tab label="Registration" {...a11yProps(1)} />
                    <Tab label="Authorization" {...a11yProps(2)} />
                    <Tab label="Messages" {...a11yProps(3)} />
                    <Tab label="Customize" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Card variant='outlined'>{card}</Card>

                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>

                <Card variant='outlined' sx={{ marginTop: '20px' }}>{card2}</Card>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                                <br />
                                                <span style={{ ...listFollowingTextStyles }}>
                                                    Enable clients to self register in the portal
                                                </span>
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                                <br />
                                                <span style={{ ...listFollowingTextStyles }}>
                                                    Enable clients to self register in the portal
                                                </span>
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                                <br />
                                                <span style={{ ...listFollowingTextStyles }}>
                                                    Enable clients to self register in the portal
                                                </span>
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ m: '20px 20px 20px 20px' }}>
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <Switch {...label} defaultChecked />
                                                </IconButton>
                                            }
                                        >
                                            <Typography>
                                                Client Portal
                                                <br />
                                                <span style={{ ...listFollowingTextStyles }}>
                                                    Enable clients to self register in the portal
                                                </span>
                                            </Typography>
                                        </ListItem>
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Card variant='outlined'>{card3}</Card>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Card variant='outlined'>{card4}</Card>
            </TabPanel>
        </Box>
    )
}
