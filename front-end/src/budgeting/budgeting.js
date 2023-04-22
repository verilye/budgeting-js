import './budgeting.css';
import React,{ useContext} from 'react';
import { Box,Button } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext';

export default function BudgetViewPort(){

    let {user, logout} = useContext(AuthContext);

    const navigate = useNavigate();

    let handleLogout =()=>{
        logout();
        navigate("/budgeting-js"); 
    };


    return(
            <div className="budgeting">

                <Box className ="logo"
                    sx={{                    
                        fontSize: '2rem',
                        paddingLeft:'1rem',
                        height:'10vh',
                    }}
                >

                    budgeting-js 
                </Box>
                <Button onClick = {handleLogout}>
                    Logout
                </Button>
                {user ? 
                (<Box
                    fontSize ="50px"
                >Hi {user.user_id}, your jwt is {user.jwt}
                </Box>) : null}

                {/* Make the income log expandable and editable in place to quickly add new income */}
                {/* Show % of income that has been allocated */}
                
                <IncomeDisplay
                
                    sx ={{
                        height:"90vh",
                    }}
                    
                />

                <Box className='category-display'
                
                sx={{
                    fontSize: '1.5rem',
                    padding:'20px',
                    margin:'10px',
                    height:'80vh',
                    borderRadius: '2rem',
                    borderStyle: 'solid',
                    borderColor: 'black',
                }}
                
                >
                    CATEGORIES:
                    {/* Paginate categories and goals here */}  
                    {/* Categories should be scalable in size*/}
                    
                    <Category/>

                    <Category/>

                    <Category/>

                </Box>
            
            </div>
    )

}