import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

export const PrivateRoute = ({children}) => {
    const {user}  = useContext(AuthContext)
    const location = useLocation()

    if(!user){
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
}