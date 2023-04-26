import React, { useContext } from 'react';
import { Box, Divider } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';

import './budgeting.css';
import NavBar from './navbar';

export default function BudgetViewPort() {


    return (
        <div className="budgeting">

            {/* Logo + user name + logout */}
            <NavBar/>

            <Divider/>

            {/* Edit income and display date */}
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