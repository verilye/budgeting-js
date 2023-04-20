import {useEffect} from 'react';
import {useUser} from './useUser';
import {useLocalStorage } from './useLocalStorage';

// Access point for all auth related activities from regular code
// The other hooks are 'helper' behind the scenese hooks

export const useAuth = () =>{

    const {user,addUser, removeUser} = useUser();
    const {getItem} = useLocalStorage();
    
    useEffect(()=>{
        // TODO 
        // Authenticate jwt here
        const user = getItem('user');
        console.log(user);
        if(user){
            addUser(JSON.parse(user));
        }
    // eslint-disable-next-line    
    },[]);

    const login = (user) =>{
        addUser(user);
        
    }

    const logout = () =>{
        removeUser();
    }

    return {user ,login, logout};

};