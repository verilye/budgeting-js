import React, { useState, createContext } from "react";

const AuthContext = createContext();

// READ THIS LEST YE WASTE ANOTHER 3 DAYS!!!

// When manually entering a url, the context is wiped
// To persist login after manually entering url, local storage
// shenanigans will need to be used. 

// NOTE

function AuthProvider(props) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(()=>{
        const saved = localStorage.getItem('user');
        if(saved) { 
            console.log(saved);
            setAuthenticated(true);
        }
        return saved || "";
    });

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


