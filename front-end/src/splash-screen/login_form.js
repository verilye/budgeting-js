import { Box } from "@mui/material";
import React from "react";
import './login-form.css';


export default class Login extends React.Component{

    render(){
        return(
            <Box className="login-form slide-down">
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
                        type="submit" value="CREATE ACCOUNT"
                    />
                    <input
                        className="login-button form" 
                        type="submit" value="LOGIN"
                    />
                </form>
            </Box>
        )
    }
}