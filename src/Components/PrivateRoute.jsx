import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div>
                <span className='flex justify-center text-4xl my-20'><FontAwesomeIcon icon={faSpinner} className='animate-spin'></FontAwesomeIcon></span>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
};

export default PrivateRoute;