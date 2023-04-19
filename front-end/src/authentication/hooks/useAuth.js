import {useEffect, useState} from 'react';
import {useUser} from './useUser';
import { useLocalStorage } from './useLocalStorage';
import { AuthContext } from '../context/AuthContext';

// Access point for all auth related activities from regular code
// The other hooks are 'helper' behind the scenese hooks

export const useAuth = () =>{

    const {user,addUser, removeUser} = useUser();
    const {getItem} = useLocalStorage();
    const context = useState(AuthContext);

    useEffect(()=>{
        const user = getItem('user');
        console.log(user);
        if(user){
            addUser(JSON.parse(user));
        }
        
    }, []);

    const login = (user) =>{
        addUser(user);
    }

    const logout = () =>{
        removeUser();
    }

    return {user ,login, logout};

};