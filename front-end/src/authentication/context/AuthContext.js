import {createContext} from 'react';

// Auth context tutorial
// Up to step 4
// This will be an attempt to integrate the new auth system 
// with the current sloppy one
// https://dev.to/dayvster/use-react-context-for-auth-288g

export const AuthContext = createContext({
    user:null,
    setUser:()=>{},
});
