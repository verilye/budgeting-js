import React, { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';

const GuardedRoute = ({children})=>{

    const user = useContext(AuthContext);

    // TODO

    // Make sure a user exists -> doesnt need to be valid because 
    // we should be kicking incorrect users out when they send a 
    // request to the APIs

    // For some reason this code cant seem to access the context?
    // Potentially because it isnt considered a child for whatever reason

    console.log("Guarded Route user : \n");
    console.log(user);

    return user ? children : <Navigate to="/budgeting-js"/>;

}

export default GuardedRoute;