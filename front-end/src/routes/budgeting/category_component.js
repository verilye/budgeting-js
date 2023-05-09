import React from "react"
import { Box } from "@mui/material";
import Goal from "./goal_component"
import AddGoalDialog from "./dialogs/add_goal_dialog";

export default function Category() {


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
                Category
                <AddGoalDialog/>
                {/* populate with goals */}
                <Goal />
            </Box>
        </Box>
    )
}