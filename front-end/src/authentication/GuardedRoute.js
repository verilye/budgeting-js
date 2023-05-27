import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function GuardedRoute({ children }) {

    const [isLoading, setIsLoading] = useState(true);
    const { authenticated, login } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            const saved = localStorage.getItem('user');
            const income = localStorage.getItem('income');
            if (saved) {
                login(JSON.parse(saved), JSON.parse(income));
                setIsLoading(false);
            }
        },100);
        //eslint-disable-next-line
    }, []);

    if(isLoading){
        return <div></div>
    }

    return (
        (authenticated) ? children : <Navigate to="/budgeting-js/splash" />
    );

}