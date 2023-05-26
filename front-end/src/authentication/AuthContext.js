import React, { useState, createContext } from "react";

// READ THIS LEST YE WASTE ANOTHER 3 DAYS!!!

// When manually entering a url, the context is wiped
// To persist login after manually entering url, local storage
// shenanigans will need to be used. 

const AuthContext = createContext();

function AuthProvider(props) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
   
    const login = (user) => {
        console.log("AuthProvider - login");
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


