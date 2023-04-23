import {useState} from 'react';

// A good example of react context and hooks
// used to retrieve and store things in local storage   

export const useLocalStorage = () =>{
    
    const [value, setValue] = useState("");

    const setItem = (key, value) =>{
        localStorage.setItem(key, value);
        setValue(value);
    };

    const getItem = (key) =>{
        const value = localStorage.getItem(key);
        setValue(value);
        return value;
    };

    const removeItem = (key) =>{
        localStorage.removeItem(key);
        setValue(null);
    };

    return{value, setItem, getItem, removeItem};

}