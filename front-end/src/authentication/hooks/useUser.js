import {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useLocalStorage } from "./useLocalStorage";


export const useUser = ()=>{
    const [user, setUser]= useState(AuthContext);
    const {setItem} = useLocalStorage();

    const addUser = (user) =>{
        console.log("Use User activated!")
        setUser(user);
        setItem('user', JSON.stringify(user));
    };

    const removeUser = () =>{
        setUser(null);
        setItem('user', '');   
    };

    return{user, addUser, removeUser};
};