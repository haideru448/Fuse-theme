import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import userInterfaceConfigs from '../main/user-interface/UserInterfaceConfigs';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';
import pagesConfigs from '../main/pages/pagesConfigs';
import authRoleExamplesConfigs from '../main/auth/authRoleExamplesConfigs';
import DocumentationConfig from '../main/documentation/DocumentationConfig';
import SettingsPage from '../main/pages/settings'
import EditInvoicePage from '../main/pages/settings/EditInvoicePage'


const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,
  ...userInterfaceConfigs,
  DocumentationConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="dashboards/analytics" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/dashboards/settings',
    element: <SettingsPage />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/dashboards/settings/:id',
    element: <SettingsPage />,
    auth: settingsConfig.defaultAuth,
  },

  {
    path: '/dashboards/edit-invoice/:id',
    element: <EditInvoicePage />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
