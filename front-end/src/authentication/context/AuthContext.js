import {createContext} from 'react';

// Auth context tutorial
// Up to step 4
// This will be an attempt to integrate the new auth system 
// with the current sloppy one
// https://dev.to/dayvster/use-react-context-for-auth-288g

// Helpful useEffect() dependancy array information
// https://codedamn.com/news/reactjs/useeffect-dependency?fbclid=IwAR25sdq4S1Ne39HIcmhV7SL19QcZ4gfs3daH8FiNho2SMEecDsJnEip9Hq4

// Testing react hooks
// https://www.toptal.com/react/testing-react-hooks-tutorial

export const AuthContext = createContext({
    user:null,
    setUser:()=>{},
});
