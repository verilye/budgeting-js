import React from "react";
import { useState } from "react";
import About from "./about-component";
import Features from "./features-component";
import Login from "./login-component";

import "./splash.css";

export default function Splash(){

    const [loginVisible, setLoginVisible] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const [aboutVisibile, setAboutVisible] = useState(false);
 
    const toggleLogin = event =>{
        setLoginVisible(!loginVisible);
        setFeaturesVisible(false);
        setAboutVisible(false);
    };

    const toggleFeatures = event =>{
        setLoginVisible(false);
        setFeaturesVisible(!featuresVisible);
        setAboutVisible(false);
    }

    const toggleAbout = event =>{
        setLoginVisible(false);
        setFeaturesVisible(false);
        setAboutVisible(!aboutVisibile);
    }

    return(
        <div className='splash slide-in'>
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
                        {loginVisible && <Login/>}
                </div> 
                <div className='features item' onClick={toggleFeatures}>
                    features
                        {featuresVisible && <Features/> }
                </div>
                <div className='item' onClick={toggleAbout}>
                    about
                        {aboutVisibile && <About/> }    
                </div>
            </div>
        </div>
    )
    
}