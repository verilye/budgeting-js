import './budgeting.css';
import React from 'react';
import { Box } from "@mui/material";
import IncomeDisplay from './income-display';
import Category from './category-component';

export default function BudgetViewPort(){


    return(

        <div className="budgeting">

            <Box className ="logo"
                sx={{                    
                    fontSize: '2rem',
                    padding:'1rem',
                    height:'10vh',
                    marginBottom: "20px",
                }}

            >

                budgeting-js 
            </Box>

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