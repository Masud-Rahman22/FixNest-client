import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/layout/Loading';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { email, isLoading } = useSelector((state) => state.userSlice)
    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading && !email) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;