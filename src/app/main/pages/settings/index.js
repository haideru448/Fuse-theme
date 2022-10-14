import Box from '@mui/material/Box';
import { useState } from 'react';
import LeftPanel from './leftPanel';
import CompanyDetailsPanel from './tabsPanel/companyDetails';
import OnlinePayments from './tabsPanel/onlinePayments';
import TaxSettings from './tabsPanel/taxSettings';
import ProductSettings from './tabsPanel/productSettings';
import TaskSettings from './tabsPanel/taskSettings';
import ExpenseSettings from './tabsPanel/expenseSettings';
import EmailSettings from './tabsPanel/emailSettings';
import LocalizationSettings from './tabsPanel/localizationSettings'
 





const Main = () => {
  const [selectedOption, setSelectedOption] = useState('company');
  const setChoosenOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <LeftPanel setChoosenOption={setChoosenOption} selectedOption={selectedOption} />
      {selectedOption === 'company' && <CompanyDetailsPanel />}
      {selectedOption === 'online payments' && <OnlinePayments />}
      {selectedOption === 'tax' && <TaxSettings />}
      {selectedOption === 'product settings' && <ProductSettings />}
      {selectedOption === 'tax settings' && <TaskSettings />}
      {selectedOption === 'expense settings' && <ExpenseSettings />}
      {selectedOption === 'email settings' && <EmailSettings />}
      {selectedOption === 'localization' && <LocalizationSettings />}



      


      



      



      



    </Box>
  );
};

export default Main;
