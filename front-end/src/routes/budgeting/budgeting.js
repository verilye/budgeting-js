import React, { useContext, useEffect, useState } from 'react';
import { Box, Divider } from "@mui/material";
import IncomeDisplay from './income_display';
import Category from './category_component';
import { useNavigate } from 'react-router-dom';

import './budgeting.css';
import NavBar from './navbar';
import AddCategoryDialog from './dialogs/add_category_dialog';
import { AuthContext } from '../../authentication/AuthContext';

export default function BudgetViewPort() {

    const { user ,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    let [data, setData] = useState();

    // Here we want to load all categories and goals then display them
    let fetchData = React.useCallback(async () => {
        try {
            const res = await fetch("http://localhost:4000/budgeting/get-goals", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': user.jwt
                },
                body: JSON.stringify({
                    user_id: user.user_id,
                })
            });

            let resJson = await res.json();

            setData(resJson);
        }
        catch (err) {
            console.log(err);
            logout();
            navigate("/budgeting-js");
        }

    }, [user]);


    useEffect(() => {

        fetchData();

    }, [fetchData]);

    return (
        <div className="budgeting">

            <NavBar />

            <Divider />

            <IncomeDisplay fetchData={fetchData} />

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

                    fetchData={fetchData}

                />

                <Box className='categories'>

                    {
                        (data) ? data.categories.map(item => (
                            // pass down props here 
                            // for pagination 
                            <Category
                                fetchData={fetchData}
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