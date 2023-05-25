import React, { useContext} from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function GuardedRoute({children}){

    const {authenticated} = useContext(AuthContext);

    console.log("Authenticated ?:");
    console.log(authenticated);

    return (
        (authenticated) ? children : <Navigate to="/budgeting-js/splash"/>
    );

}