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

    // Here we want to load all categories and goals then display them
    let fetchData = React.useCallback(async()=> {


        const res = await fetch("http://localhost:4000/budgeting/get-goals/" + user.user_id, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
            }
        });

        let resJson = await res.json();

        setData(resJson);

    },[user]);


    useEffect(() => {

        fetchData();

    }, [fetchData]);

    return (
        <div className="budgeting">

            <NavBar />

            <Divider />

            <IncomeDisplay fetchData={fetchData}/>

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
                <AddCategoryDialog 

                    fetchData = {fetchData}

                />

                <Box className='categories'>

                    {
                        (data) ? data.categories.map(item => (
                            // pass down props here 
                            // for pagination 
                            <Category
                                fetchData = {fetchData}
                                key={item.category_id}
                                category_id={item.category_id}
                                goals={item.goals}

                            />
                        )) : <></>

                    }


                </Box>
            </Box>

        </div>
    )

}