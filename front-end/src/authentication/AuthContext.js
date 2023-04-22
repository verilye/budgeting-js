import React, { useState, createContext } from "react";

const AuthContext = createContext();

// FOLLOW THIS 
// https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component

// Testing react hooks
// https://www.toptal.com/react/testing-react-hooks-tutorial

function AuthProvider(props){

    const [authenticated, setAuthenticated] = useState(false);
    console.log("AuthProvider - authenticated:")
    console.log(authenticated);
    const [user, setUser] = useState(null);
    console.log("AuthProvider - user:");
    console.log(user);

    const login = (user)=>{
        console.log("AuthProvider - login");
        setUser(user);
        setAuthenticated(true);
    }

    const logout = ()=>{
        setUser(null);
        setAuthenticated(false);
    }

    const value ={
        authenticated, user, login, logout
    }

    return(
        <AuthContext.Provider value={value} {...props}/>
    )

}

export {AuthContext, AuthProvider};


