import React, { useContext, useEffect, useState } from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function GuardedRoute({children}){

    const {authenticated} = React.useContext(AuthContext);

    console.log("Guarded Route:");
    console.log(authenticated);

    return (
        (authenticated) ? children : <Navigate to="/budgeting-js"/>
    );

}