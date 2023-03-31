import React from 'react';
import {Navigate} from 'react-router-dom';


const GuardedRoute = ({children})=>{

    // TODO validate JWt here
    
    // Do auth check

    // Hardcoded for testing, use auth() in final
    let auth = true;
    // useAuth(); is a hook that should be used here in final implementation

    return auth ? children : <Navigate to="/budgeting-js"/>;
     


}

export default GuardedRoute;