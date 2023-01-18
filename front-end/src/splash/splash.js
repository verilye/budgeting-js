import React from "react";
import { useState } from "react";
import LoginComponent from "./login-component";
import "./splash.css";

export default function Splash(){

    const [loginVisible, setLoginVisible] = useState(false);

    const toggleLogin = event =>{
        setLoginVisible(!loginVisible);
    };


    return(
        <div className='splash'>
            <div className='graphic'>
                <div className='graphic-01 graphic-item'></div>
                <div className='graphic-02 graphic-item'> </div>
                <div className='graphic-03 graphic-item'></div>
                <div className='graphic-04 graphic-item'></div>
            </div>
            
            <div className='menu-items'>
                <div className='title'>budgeting-js</div>
                <div className='login item' onClick={toggleLogin}>
                    login
                        {loginVisible && <LoginComponent/>}
                </div> 
                <div className='features item'>features</div>
                <div className='about item'>about</div>
            </div>
        </div>
    )
    
}