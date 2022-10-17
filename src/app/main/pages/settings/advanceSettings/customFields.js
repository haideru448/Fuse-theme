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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

const card1 = (
    <>
        <CardContent>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </CardContent>
    </>
);

const card2 = (
    <>
        <CardContent>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </CardContent>

        <CardContent>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box >
                        <TextField id='standard-basic' label='Vendor Field' variant='standard' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Filed Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="Filed Type"
                            >
                                <MenuItem value={0}>
                                    Signle Line Text
                                </MenuItem>
                                <MenuItem value={10}>Multi Line Text</MenuItem>
                                <MenuItem value={20}>Switch</MenuItem>
                                <MenuItem value={30}>Dropdown</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
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

export default function customFields() {

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
                    <Typography sx={{ mb: '20px', fontSize: '20px' }}>Custom Fields</Typography>
                    <Box>
                        <Button>Save</Button>
                        <Button onClick={() => history.push('dashboards/settings')}>Cancel</Button>
                    </Box>
                </Box>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Company" {...a11yProps(0)} />
                    <Tab label="Clients" {...a11yProps(1)} />
                    <Tab label="Products" {...a11yProps(2)} />
                    <Tab label="Invoices" {...a11yProps(3)} />
                    <Tab label="Payments" {...a11yProps(4)} />
                    <Tab label="Projects" {...a11yProps(5)} />
                    <Tab label="Tasks" {...a11yProps(6)} />
                    <Tab label="Vendors" {...a11yProps(7)} />
                    <Tab label="Expenses" {...a11yProps(8)} />
                    <Tab label="Users" {...a11yProps(9)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Card variant='outlined'>{card1}</Card>
                <Card variant='outlined'>{card2}</Card>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Card variant='outlined'>{card1}</Card>

            </TabPanel>

            <TabPanel value={value} index={3}>
                <Card variant='outlined'>{card1}</Card>
                <Card variant='outlined'>{card2}</Card>
            </TabPanel>

            <TabPanel value={value} index={4}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={5}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={6}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={7}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={8}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>

            <TabPanel value={value} index={9}>
                <Card variant='outlined'>{card1}</Card>
            </TabPanel>
        </Box>
    )
}
