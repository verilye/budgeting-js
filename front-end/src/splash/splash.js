import React from "react";
import LoginComponent from "./login-component";
import "./splash.css";


export default class Splash extends React.Component{

    render(){

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
                    <div className='login item'>
                        login 
                        <div className='item'>
                            <LoginComponent/>
                        </div>
                    </div> 
                    <div className='features item'>features</div>
                    <div className='about item'>about</div>
                </div>
            </div>
        )
    }


}