import { Box, Button, FormGroup, TextField } from "@mui/material";
import React from "react";
import './login_form.css';

export default class Login extends React.Component{

    render(){
        return(
            <Box className="login-form slide-down">
                <FormGroup>

                        <TextField type="text" name="username" placeholder="USERNAME"
                         className="username-input form"/>
                    
                    <br/>
                    
                        <TextField type="text" name="password" placeholder="PASSWORD"
                         className="password-input form"/>
                   
                    <br/>
                    <Button
                        sx={{
                            backgroundColor:"black",
                            "&:hover":{
                                color:"black",
                                bgcolor:"#FFFFFF",
                                borderStyle:"solid",
                                borderWidth:"2px",
                                borderColor:"black"
                            }
                        }}
                        variant ="contained"
                        className="login-button form" 
                        type="submit" value="LOGIN"
                    >LOGIN</Button>  
                    <Box
                        sx={{
                            fontSize:"13px",
                            margin:0,
                            padding:"2px",
                        }}
                    >- or -</Box>

                    <Button
                         sx={{
                            backgroundColor:"black",
                            "&:hover":{
                                color:"black",
                                bgcolor:"#FFFFFF",
                                borderStyle:"solid",
                                borderWidth:"2px",
                                borderColor:"black"
                            }
                        }}
                        variant ="contained"
                        className="login-button form" 
                        type="submit" value="CREATE ACCOUNT"
                    >CREATE ACCOUNT</Button>
                    
                    <br/>
                </FormGroup>
            </Box>
        )
    }
}