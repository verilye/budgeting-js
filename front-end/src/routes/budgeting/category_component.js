import React from "react"
import { Box, Button } from "@mui/material";
import Goal from "./goal_component"

export default function Category() {


    return (

        <Box>
            <Box className='category'
                sx={{
                    width: "65vw",
                    fontSize: '1rem',
                    padding: '10px',
                    paddingLeft:"20px",
                    margin: '10px',
                    borderRadius: '1rem',
                    borderStyle: 'solid',
                    borderColor: 'black',
                }}

            >
                Category
                <Button
                    padding="10px"

                    sx={{
                        fontSize: "10px",
                        backgroundColor: "black",
                        color: "white",
                        height: "1rem",
                        padding: "1rem",
                        margin: "1.5rem",
                        "&:hover": {
                            color: "black",
                            bgcolor: "#FFFFFF",
                            borderStyle: "solid",
                        }
                    }} >new goal+</Button>
                {/* populate with goals */}
                <Goal />
            </Box>
        </Box>
    )
}