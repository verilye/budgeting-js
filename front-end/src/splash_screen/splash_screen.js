import React from "react";
import { useState } from "react";
import About from "./about";
import Features from "./features";
import Login from "./login_form";
import { Box } from "@mui/system";

import "./splash_screen.css";
import "./slide_in_animations.css";

export default function Splash(){

    const [loginVisible, setLoginVisible] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const [aboutVisibile, setAboutVisible] = useState(false);
 
    const toggleLogin = event =>{
        
        setLoginVisible(!loginVisible);
    };

    const toggleFeatures = event =>{

        setFeaturesVisible(!featuresVisible);
       
    }

    const toggleAbout = event =>{
        setAboutVisible(!aboutVisibile);
    }

    return(
            <Box className="font-setting">
                <Box className='graphic slide-in'>
                    <div className='graphic-01 graphic-item'></div>
                    <div className='graphic-02 graphic-item'> </div>
                    <div className='graphic-03 graphic-item'></div>
                    <div className='graphic-04 graphic-item'></div>
                    <Box className='title'>budgeting-js</Box>
                </Box>
                <div className='splash slide-in'>
                    <div className='menu-items'>
                        <div>
                            <div className="item" onClick={toggleLogin}>login</div>
                                {loginVisible && <Login/>}
                        </div> 
                        <div>
                            <div className="item" onClick={toggleFeatures}>features</div>
                        </div>
                        <div>
                            <div className="item" onClick={toggleAbout}>about</div>
                                {aboutVisibile && <About/> }    
                        </div>
                    </div>
                </div>
                {featuresVisible && <Features/> }
            </Box>
    )
    
}