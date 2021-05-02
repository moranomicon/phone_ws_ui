import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import PhoneList from './pages/PhoneList';
import RequestPhone from './pages/RequestPhone';
import LeaveReview from './pages/LeaveReview';
import ComparePhone from './pages/ComparePhone';
import PhoneRepair from './pages/PhoneRepair';
import PhoneReview from './pages/PhoneReview';
import PhoneTransaction from './pages/PhoneTransaction';
import PhoneRequest from './pages/PhoneRequest';
import PhoneDetails from './pages/PhoneDetails';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Login /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'packing-list', element: <RequestPhone /> },
      { path: 'request', element: <RequestPhone /> },
      { path: 'phone', element: <PhoneList /> },
      { path: 'phone-detail/:id', element: <PhoneDetails /> },
      { path: 'review', element: <LeaveReview /> },
      { path: 'settings', element: <Settings /> },
      { path: 'compare-phone/:id1/:id2', element: <ComparePhone /> },
      { path: 'my-phone-review', element: <PhoneReview /> },
      { path: 'my-phone-transaction', element: <PhoneTransaction /> },
      { path: 'my-phone-repair', element: <PhoneRepair /> },
      { path: 'my-phone-request', element: <PhoneRequest /> },
      { path: '/', element: <PhoneList /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];

export default routes;
