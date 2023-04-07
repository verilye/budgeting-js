import {createContext} from React;
import {User} from "../hooks/useUser";

// Auth context tutorial
// https://dev.to/dayvster/use-react-context-for-auth-288g

export const AuthContext = createContext(()=>{
    const user = null;
    function setUser();
});
