import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext)

    if(!user){
        <Navigate to='/SignIn'></Navigate>
    }

    
    return children;
};

export default PrivateRoute;