import { useState, useEffect, useRef } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import LeftPanel from './leftPanel';
import CompanyDetailsPanel from './tabsPanel/companyDetails';
// import CompanyDetailsPanel from './tabsPanel/companyDetails';
import OnlinePayments from './tabsPanel/onlinePayments';
import TaxSettings from './tabsPanel/taxSettings';
import ProductSettings from './tabsPanel/productSettings';
import TaskSettings from './tabsPanel/taskSettings';
import ExpenseSettings from './tabsPanel/expenseSettings';
import EmailSettings from './tabsPanel/emailSettings';
import LocalizationSettings from './tabsPanel/localizationSettings';
import WorkflowSettings from './tabsPanel/workflowSettings';
import ImportExportSettings from './tabsPanel/importExport';
import UserDetails from './tabsPanel/userDetails';
import DeviceSettings from './tabsPanel/deviceSettings';

// import ContactsSidebarContent from './ContactsSidebarContent';
// import ContactsHeader from '../../apps/contacts';
// import ContactsList from './ContactsList';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Main = () => {
  const [selectedOption, setSelectedOption] = useState('company');
  const [displayRightMenu, setDisplayRightMenu] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);

  const setChoosenOption = (option) => {
    setSelectedOption(option);
  };
  const displayMenu = (display) => {
    setDisplayRightMenu(display);
  };

  return (
    <Root
      // header={<ContactsHeader pageLayout={pageLayout} />}
      content={
        <LeftPanel
          setChoosenOption={setChoosenOption}
          selectedOption={selectedOption}
          displayMenu={displayMenu}
          selectedMenu={routeParams.id}
        />
      }
      ref={pageLayout}
      rightSidebarContent={
        <>
          {routeParams.id === '1' && <CompanyDetailsPanel />}
          {routeParams.id === '3' && <OnlinePayments />}
          {routeParams.id === '4' && <TaxSettings />}
          {routeParams.id === '5' && <ProductSettings />}
          {routeParams.id === '6' && <TaskSettings />}
          {routeParams.id === '7' && <ExpenseSettings />}
          {routeParams.id === '8' && <EmailSettings />}
          {routeParams.id === '2' && <LocalizationSettings />}
          {routeParams.id === '9' && <WorkflowSettings />}
          {routeParams.id === '10' && <ImportExportSettings />}
          {routeParams.id === '11' && <UserDetails />}
          {routeParams.id === '12' && <DeviceSettings />}
        </>
      }
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => setRightSidebarOpen(false)}
      rightSidebarWidth={640}
      scroll={isMobile ? 'normal' : 'content'}
    />
    // <Box sx={{ display: 'grid', gridTemplateColumns:'500px auto'}}>

    // </Box>
  );
};

export default Main;
