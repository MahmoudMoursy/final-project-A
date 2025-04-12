import { Navigate, useNavigate } from 'react-router-dom';
import SigninDashboard from './Components/SigninDashboard';

const PrivateRoute = ({ element, isAuthenticated }) => {
    const nav = useNavigate();
  return isAuthenticated ? element : <SigninDashboard/>;
};

export default PrivateRoute;
