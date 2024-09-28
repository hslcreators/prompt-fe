import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from './utils/AuthStore';

const AuthRoute = ({ children }) => {
    const { token } = useAuthStore((state) => ({
        token: state.token,
    }));
    return token ? children : <Navigate to="/login" />;
};

export default AuthRoute;
