import React, { useContext, useEffect, useState } from 'react';
import { Box, Divider } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';

import './budgeting.css';
import NavBar from './navbar';
import AddCategoryDialog from './dialogs/add_category_dialog';
import { AuthContext } from '../../authentication/AuthContext';

export default function BudgetViewPort() {

    const { user } = useContext(AuthContext);

    let [data, setData] = useState();


    useEffect(() => {

        // Here we want to load all categories and goals then display them

        async function fetchData() {

            const res = await fetch("http://localhost:4000/budgeting/get-goals/" + user.user_id, {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let resJson = await res.json();

            setData(resJson);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

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
                <AddCategoryDialog />
                
                <Box className='categories'>

                    {
                        (data) ? data.categories.map(item => (
                                // pass down props here 
                                // for pagination 
                                <Category
                                    key ={item.category_id}
                                    category_id = {item.category_id}
                                    goals = {item.goals}

                                />
                            )): <></>
                        
                    }


                </Box>
            </Box>

        </div>
    )

}