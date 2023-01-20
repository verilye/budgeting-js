import React from "react";
import './login.css';


export default class Login extends React.Component{

    render(){
        return(
            <div className="login-form">
                <form>
                    <label>
                        <input type="text" name="username" placeholder="USERNAME"
                         className="username-input form"/>
                    </label>
                    <br/>
                    <label >
                        <input type="text" name="password" placeholder="PASSWORD"
                         className="password-input form"/>
                    </label>
                    <br/>
                    <input
                        className="login-button form" 
                        type="submit" value="SUBMIT"
                    />
                </form>
            </div>
        )
    }
}