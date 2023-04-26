import React, { useContext } from 'react';
import { Box, Button } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authentication/AuthContext';
import './budgeting.css';

export default function BudgetViewPort() {

    let { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    let handleLogout = () => {
        logout();
        navigate("/budgeting-js");
    };

    return (
        <div className="budgeting">

            <Box
                height='10vh'
                width="100%"
                display="flex"
                justifyContent="space-between"
            >
                <Box className="logo"
                    padding="25px"
                    sx={{
                        fontSize: '2rem',
                        paddingLeft: '1rem',
                    }}
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
                            borderstyle:"white",
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

            {/* Make the income log expandable and editable in place to quickly add new income */}
            {/* Show % of income that has been allocated */}

            <IncomeDisplay/>

            <Box className='category-display'
             
                sx={{
                    fontSize: '1.5rem',
                    padding: '20px',
                    margin: '10px',
                    height: '80vh',
                    borderRadius: '2rem',
                    borderStyle: 'solid',
                    borderColor: 'black',
                }}

            >
                CATEGORIES:
                {/* Paginate categories and goals here */}
                {/* Categories should be scalable in size*/}

                <Category />

                <Category />

                <Category />

            </Box>

        </div>
    )

}