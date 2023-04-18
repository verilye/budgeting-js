import {useEffect} from 'react';
import {useUser} from './useUser';
import { useLocalStorage } from './useLocalStorage';

// Access point for all auth related activities from regular code
// The other hooks are 'helper' behind the scenese hooks

export const useAuth = () =>{

    const {user,addUser, removeUser} = useUser();
    const {getItem} = useLocalStorage();

    useEffect(()=>{
        console.log("useEffect triggered")
        const user = getItem('user');
        if(user){
            addUser(JSON.parse(user));
        }

        
    }, []);

    const login = (user) =>{
        console.log("useAuth() activated")
        addUser(user);
    }

    const logout = () =>{
        removeUser();
    }

    return {user ,login, logout};

};