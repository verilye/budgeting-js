import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function GuardedRoute({ children }) {

    const { authenticated, login } = useContext(AuthContext);

    useEffect(() => {

        console.log("DING DONG BITCH")
        const saved = localStorage.getItem('user');
        const income = localStorage.getItem('income');

        if (saved) {
            login(JSON.parse(saved), JSON.parse(income));
        }
        //eslint-disable-next-line
    }, []);


    return (
        (authenticated === true) ? children : <Navigate to="/budgeting-js/splash" /> 
    );

}