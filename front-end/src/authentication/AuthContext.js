import React, { useState, createContext } from "react";

// To authenticate a user a client application must send a JSON web token
// in the authorisation header of the HTTP request to your backend API
// https://cloud.google.com/api-gateway/docs/authenticating-users-jwt

const AuthContext = createContext();

function AuthProvider(props) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [income, setIncome] = useState(null);
   
    const login = (user,income) => {

        console.log(income);
        setUser(user);
        setIncome(income);
        setAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('income', JSON.stringify(income));
    }

    const logout = () => {
        setUser(null);
        setAuthenticated(false);
        localStorage.removeItem('user');
        localStorage.removeItem('income');
    }

    const value = {
        authenticated, user, income,setIncome,login, logout
    }

    return (
        <AuthContext.Provider value={value} {...props} />
    )

}

export { AuthContext, AuthProvider };


