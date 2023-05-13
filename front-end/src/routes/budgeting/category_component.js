import React from "react"
import { Box } from "@mui/material";
import Goal from "./goal_component"
import AddGoalDialog from "./dialogs/add_goal_dialog";

export default function Category({category_id,goals}) {


    return (

        <Box>
            <Box className='category'
                sx={{
                    width: "65vw",
                    fontSize: '1rem',
                    padding: '10px',
                    paddingLeft: "20px",
                    margin: '10px',
                    borderRadius: '1rem',
                    borderStyle: 'solid',
                    borderColor: 'black',
                }}

            > 
                {category_id}
                <AddGoalDialog 
                    category_id={category_id}
                />

                {
                    (goals) ? goals.map(item => (
                        // pass down props here 
                        // for pagination 
                        <Goal
                            key = {item.goal_id}
                            goal_id = {item.goal_id}
                            target_amount = { item.target_amount}
                            target_progress ={item.target_progress}

                        />
                    )) : <></>

                }
            </Box>
        </Box>
    )
}