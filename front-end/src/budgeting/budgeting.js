import './budgeting.css';
import React from 'react';
import { Box } from "@mui/material";
import IncomeDisplay from './income-display';

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

            <div className='category-display'>
                CATEGORIES:
                {/* Paginate categories and goals here */}  
                {/* Categories should be scalable in size, goals should not  */}

                <div className='category'>
                    Bills:

                    {/* https://www.freecodecamp.org/news/content/images/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png
                        Inspiration for goal loading bar */}
                    <div className='goal'>RENT</div>
                    <div className='goal'>PHONE</div >
                </div>

                <div className='category'>
                    Groceries:
                    <div className='goal'></div>   
                </div>

                <div className='category'>
                    Frogs:
                    <div className='goal'></div>
                </div>
                


            </div>
        
        </div>
    )

}