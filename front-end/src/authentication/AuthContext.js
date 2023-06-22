import React, { useState, createContext } from "react";

// To authenticate a user a client application must send a JSON web token
// in the authorisation header of the HTTP request to your backend API
// https://cloud.google.com/api-gateway/docs/authenticating-users-jwt

const AuthContext = createContext();

function AuthProvider(props) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [income, setIncome] = useState(null);
   
    const storeLocally = (user, income) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('income', JSON.stringify(income));
    }

    const login = (user,income) => {
        storeLocally(user, income); 
        setUser(user);
        setIncome(income);
        setAuthenticated(true);
    }

    const logout = () => {
        setUser(null);
        setAuthenticated(false);
        setIncome(null);
        localStorage.removeItem('user');
        localStorage.removeItem('income');
    }

    const value = {
        authenticated,setAuthenticated, user, income,setIncome, login, logout, storeLocally
    }

    

    return (
        <AuthContext.Provider value={value} {...props} />
    )

}

export { AuthContext, AuthProvider };


