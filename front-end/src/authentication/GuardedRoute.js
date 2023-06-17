import React, { useContext, useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function GuardedRoute({ children }) {

    const [isLoading, setIsLoading] = useState(true);
    const { authenticated, login, setAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(async() => {
            const saved = localStorage.getItem('user');
            const income = localStorage.getItem('income');
            if (saved) {
                await login(JSON.parse(saved), JSON.parse(income));
                setAuthenticated(true);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        },50);
        //eslint-disable-next-line
    }, []);

    // The loading screen is needed so that the AuthContext can be updated

    if (isLoading) {
        return <div></div>
    }

    return (
        (authenticated === true) ? children : <Navigate to="/budgeting-js/splash" />
    );

}