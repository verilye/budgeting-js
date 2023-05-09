import React from 'react';
import { Box, Divider } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';

import './budgeting.css';
import NavBar from './navbar';
import AddCategoryDialog from './dialogs/add_category_dialog';

export default function BudgetViewPort() {

    return (
        <div className="budgeting">

            {/* Logo + user name + logout */}
            <NavBar />

            <Divider />

            {/* Edit income and display date */}
            <IncomeDisplay />

            <Box className='category-display'

                sx={{
                    fontSize: '1.5rem',
                    padding: '20px',
                    margin: '10px',
                    borderRadius: '2rem',
                    borderStyle: 'solid',
                    borderColor: 'black',
                }}

            >
                CATEGORIES
                <AddCategoryDialog/>
                {/* Paginate categories and goals here */}
                {/* Categories should be scalable in size*/}

                <Category />

            </Box>

        </div>
    )

}