import React, { useContext } from 'react';
import { Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authentication/AuthContext';

export default function NavBar(){

    let { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    let handleLogout = () => {
        logout();
        navigate("/budgeting-js");
    };


    return(

        <Box
        height='12vh'
        width="100%"
        display="flex"
        justifyContent="space-between"
        borderWidth = "2rem"
        borderStyle= "solid"
        borderColor= "black"
        
    >
        <Box className="logo"
            padding="25px"
            fontSize='2rem'
            paddingLeft= '1rem'

        >
            budgeting-js
        </Box>

        <Box
            display="flex"
        >
            <Box
                padding="1.5rem"
                fontSize="1.5rem"

            > 
                welcome {user.user_id}
            </Box>
            <Button
                padding ="10px"
                sx={{
                    backgroundColor: "black",
                    color:"white",
                    height:"2.5rem",
                    padding:"1rem",
                    margin:"1.5rem",
                    fontWeight:"bold",
                    "&:hover": {
                        color: "black",
                        bgcolor: "#FFFFFF",
                        borderStyle: "solid",
                    }
                }}
                onClick={handleLogout}>
                Logout
            </Button>
        </Box>

    </Box>

    )
}