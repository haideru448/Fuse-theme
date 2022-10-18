import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EastIcon from '@mui/icons-material/East';
import history from '@history';

const pdfCardTemplateStyles = {
  position: 'absolute',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'space-between',
  pl: '10px',
  pr: '10px',
  bottom: '10px',
  background: 'white',
  zIndex: '9999',
  borderTop: '1px solid black',
  cursor: 'pointer',
};

const InvoiceSettings = () => {
  return (
    <Box sx={{ paddingTop: '30px' }}>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 1
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
            onClick={() => history.push('/dashboards/edit-invoice/1')}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 01
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 2
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
            onClick={() => history.push('/dashboards/edit-invoice/2')}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 02
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 3
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
            onClick={() => history.push('/dashboards/edit-invoice/2')}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 3
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{ mt: '30px' }}
      >
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 1
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 01
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 2
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 02
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
        <Box sx={{ width: '30%', height: '300px', position: 'relative' }}>
          <Card sx={{ borderRadius: '0', height: '100%' }}>
            <CardContent>
              {' '}
              <Typography
                variant="body1"
                color="initial"
                sx={{ transform: 'scale(0.5)', transformOrigin: '0% 0% 0px' }}
              >
                Template 3
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              ...pdfCardTemplateStyles,
            }}
          >
            <Typography variant="body1" color="initial" sx={{ fontSize: '12px' }}>
              Invoice - 3
            </Typography>
            <EastIcon sx={{ height: '15px' }} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default InvoiceSettings;
