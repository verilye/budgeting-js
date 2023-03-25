import { Box, Button, FormGroup, TextField } from "@mui/material";
import {React,useState} from "react";
import * as Yup from "yup";
import './login_form.css';



export default function LoginForm(){
    
    const[user_id,setUserID] = useState("");
    const[password_hash,setPasswordHash] = useState("");

    const schema = Yup.object({
        user_id: Yup.string().required("Required"),
        password_hash: Yup.string().required("Required"),

    });

    let handleSubmit = async (e) =>{
        
        try{
            let res = await fetch("http://localhost:4000/user-access/create-user",{
                method:"POST",
                mode:'cors',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    password_hash: password_hash,
                    income: 0,
                }),
            });

            let resJSON = await res.json();

            if (res.status === 200) {
                setUserID("");
                setPasswordHash("");
            } 

            console.log(resJSON);

        }catch(err){
            console.log(err)
        }
    };

    return(
        <Box className="login-form slide-down">
            <FormGroup
            >

                    <TextField
                        onChange={(e) => setUserID(e.target.value)}
                        type="text" 
                        name="user_id"     
                        placeholder="USERNAME"
                        className="username-input form"
                    />
                    <span>{errorMessage}</span>
                <br/>
                
                    <TextField 
                        onChange={(e) => setPasswordHash(e.target.value)}
                        type="text" 
                        name="password" 
                        placeholder="PASSWORD"
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
                    onClick={(values) =>{
                        alert(JSON.stringify(values,null,2));
                        handleSubmit;
                    }}
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