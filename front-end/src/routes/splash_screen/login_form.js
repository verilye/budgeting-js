import { Box, Button, FormControl, FormGroup, TextField, FormHelperText } from "@mui/material";
import React, { useState } from "react";

import './login_form.css';
import { AuthContext } from "../../authentication/AuthContext";
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = React.useContext(AuthContext);

    const [token, setToken] = useState("");
    const [income, setIncome] = useState();
    const [user_id, setUserID] = useState("");
    const [password, setPassword] = useState("");

    const [user_id_err, setUIDErr] = useState(false);
    const [password_err, setPErr] = useState(false);

    // On change to form element, check for correctness
    // if incorrect display error message
    // if correct, remove and change appearance

    let handleAuth = () => {
        console.log("handling auth")
        login({
            "user_id": user_id,
            "income": income,
            "jwt": token
        });
        navigate("/budgeting-js");
    }

    let checkUserID = (user_id) => {
        if (user_id.length > 20 || user_id.length <= 5) {
            setUIDErr(true);
            return false;
        }

        setUserID(user_id);
        setUIDErr(false);
        return true;
    };

    let checkPassword = (password) => {
        if (password.length > 20 || password.length <= 5) {
            setPErr(true);
            return false;
        }

        setPassword(password);
        setPErr(false);
        return true;
    };

    let handleLogin = async (e) => {

        // store login credentials in auth context once confirmed

        try {

            const res = await fetch("http://localhost:4000/user-access/login", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    password: password,
                }),
            });

            if (res.status === 200) {
                // Store User in auth context
                setIncome(res.income);
                setToken(res.token);
                handleAuth();
            }


        } catch (err) {
            console.log(err)
        }
    };

    // Submit register data (after validation)
    let handleRegister = async (e) => {

        try {
            let res = await fetch("http://localhost:4000/user-access/create-user", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    password: password,
                })
            });

            if (res.status === 200) {
                setIncome(res.income);
                setToken(res.token);
                handleAuth();
            }

        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Box className="slide-down">
            <FormGroup>
                <FormControl>
                    <TextField
                        onChange={e => checkUserID(e.target.value)}
                        type="text"
                        name="user_id"
                        placeholder="User Name"
                        className="username-input form"
                    />
                    {user_id_err ? (

                        <FormHelperText error= {true} >Username must be greater than 5 characters and less than 20</FormHelperText>

                    ) : null}

                </FormControl>
                <FormControl>
                    <TextField
                        onChange={e => checkPassword(e.target.value)}
                        type="text"
                        name="password"
                        placeholder="Password"
                        className="password-input form"
                    />
                    {password_err ? (
                        <FormHelperText error={true}>Password must be greater than 5 characters and less than 20</FormHelperText>
                    ) : null}


                </FormControl>

                <>
                    <Button
                        onClick={(!password_err && !user_id_err) ? handleLogin : null}
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: "black",
                            "&:hover": {
                                color: "black",
                                bgcolor: "#FFFFFF",
                                borderStyle: "solid",
                                borderWidth: "2px",
                                borderColor: "black"
                            }
                        }}
                        variant="contained"
                        className="login-button form"
                        type="submit" value="LOGIN"
                    >
                        LOGIN
                    </Button>

                    <Box
                        sx={{
                            fontSize: "13px",
                            margin: 0,
                            padding: "2px",
                        }}
                    >
                        - or -
                    </Box>

                    <Button
                        onClick={(!password_err && !user_id_err) ? handleRegister : null}
                        sx={{
                            backgroundColor: "black",
                            "&:hover": {
                                color: "black",
                                bgcolor: "#FFFFFF",
                                borderStyle: "solid",
                                borderWidth: "2px",
                                borderColor: "black"
                            }
                        }}
                        variant="contained"
                        className="login-button form"
                        type="submit" value="CREATE ACCOUNT"
                    >CREATE ACCOUNT</Button>
                </>
            </FormGroup>


        </Box>
    )

}