import React, { useState, createContext } from "react";


// To authenticate a user a client application must send a JSON web token
// in the authorisation header of the HTTP request to your backend API
// https://cloud.google.com/api-gateway/docs/authenticating-users-jwt

const AuthContext = createContext();

function AuthProvider(props) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
   
    const login = (user) => {
        console.log("AuthProvider - login");
        console.log(user);
        setUser(user);
        setAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        setAuthenticated(false);
        localStorage.removeItem('user');
    }

    const value = {
        authenticated, user, login, logout
    }

    return (
        <AuthContext.Provider value={value} {...props} />
    )

}

export { AuthContext, AuthProvider };


