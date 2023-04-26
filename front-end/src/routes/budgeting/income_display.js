import React, { useState } from "react"
import { Box, Button } from "@mui/material";

export default function IncomeDisplay() {

    //Add income from db here
    const income = 1210000000000;
    const currentDate = new Date();

    return (
        <Box
            margin="2rem"

        >
            <Box>
                {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
            </Box>

            <Box>
                INCOME
            </Box>



            {/* Make the income log expandable and editable in place to quickly add new income */}
            {/* Show % of income that has been allocated */}
            <Box

                style={{
                    borderStyle: "solid",
                    borderWidth: "0.2rem",
                    borderRadius: "0.5rem",
                }}

                overflow="hidden"
                variant="outline"

                sx={{
                    width: "10vw",
                    fontWeight: 'bold',
                    fontSize: "30px",
                    marginBottom: "2rem",
                }}

            >
                ${income}

            </Box>
        </Box>
    )
}