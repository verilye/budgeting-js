import React from 'react';
import {Route,redirect} from 'react-router-dom';


const GuardedRoute = (Component)=>{

    
    //Do auth check
    let auth = false;
    // useAuth(); is a hook that should be used here in final implementation

    // suggested code, Navigate failed to work though
    // return <Navigate to="/login" state={{ from: location }} />;

    return auth ? <Component/> : redirect("/");
     


}

export default GuardedRoute;