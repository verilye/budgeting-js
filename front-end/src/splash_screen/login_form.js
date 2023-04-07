import { Box, Button, FormControl, FormGroup, TextField, FormHelperText } from "@mui/material";
import {React,useState} from "react";
import bcrypt from 'react-native-bcrypt';


import './login_form.css';



export default function LoginForm(props){
    
    const[user_id,setUserID] = useState("");
    const[password,setPassword] = useState("");

    const[user_id_err,setUIDErr] = useState(false);
    const [password_err,setPErr] = useState(false);

    // On change to form element, check for correctness
    // if incorrect display error message
    // if correct, remove and change appearance

    let checkUserID = (user_id)=>{
        if(user_id.length >20 ||user_id.length <=5 ){
            setUIDErr(true);        
            return false;
        }

        setUserID(user_id);
        setUIDErr(false);
        return true;
    };

    let checkPassword = (password)=>{
        if(password.length >20 ||password.length <=5 ){
            setPErr(true);
            return false;
        }

        setPassword(password);
        setPErr(false);
        return true;
    };

    let handleLogin = async (e) =>{


        try{

            // Search for username

            const res = await fetch("http://localhost:4000/user-access/login" + user_id,{
                method:"GET",
                mode:'cors',
                headers:{
                    'Content-Type': 'application/json'
                },
            });

            let resJson = await res.json();

            if(resJson === 200){
                //store JWT
                
            }

            
        }catch(err){
            console.log(err)
        }
    };

    // Submit the data (after validation)
    let handleRegister = async (e) =>{
    
        // Hash password here before it is sent to db

        const salt = bcrypt.genSaltSync(10);
        const password_hash = bcrypt.hashSync(password, salt);

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
                setPassword("");
            } 

            console.log(resJSON);

        }catch(err){
            console.log(err)
        }
    };

    return(
        <Box className="slide-down"
        >
            {/* 
                Display errors as long as the form field is invalid 
                Add conditional 
            */}
            <FormGroup>
                <FormControl>
        
                    <TextField
                        onChange={(e) => checkUserID(e.target.value)}
                        type="text" 
                        name="user_id"     
                        placeholder="User Name"
                        className="username-input form"
                    />
                    {user_id_err ? (

                        <FormHelperText error="true">Username must be greater than 5 characters and less than 20</FormHelperText>

                    ) : null}
                    
                </FormControl>
                <FormControl>
                    <TextField 
                        onChange={(e) => checkPassword(e.target.value)}
                        type="text" 
                        name="password" 
                        placeholder="Password"
                        className="password-input form"
                    />
                    {password_err ? (
                        <FormHelperText error="true">Password must be greater than 5 characters and less than 20</FormHelperText>
                    ) : null}
                    
                
                </FormControl>

                <>
                    <Button
                        onClick={(!password_err && !user_id_err) ? handleLogin:null}
                        sx={{
                            marginTop:"1rem",
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
                    >
                        LOGIN
                    </Button>  

                    <Box
                        sx={{
                            fontSize:"13px",
                            margin:0,
                            padding:"2px",
                        }}
                    >
                        - or -
                    </Box>

                    <Button
                        onClick={(!password_err && !user_id_err) ? handleRegister:null}
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
                </>
                
                
           </FormGroup>
        </Box>
    )
    
}