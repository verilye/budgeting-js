import React from "react"
import { Box, TextField } from "@mui/material";

import moneyIcon from "../../images/money.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";


export default function IncomeDisplay() {

    //Add income from db here
    const income = 1210.21;
    const currentDate = new Date();

    // Inspiration for visual design
    // https://dribbble.com/shots/18563580-Web-App


    const handleAdd =()=>{
        //Add to income, send to server
    }

    const handleSubtract =()=>{
        // subtract from income, send to server
    }

    return (
        <Box
            margin="2rem"
            display="flex"
            justifyContent="flex-start"
            columnGap="27.5vw"
        >
            <Box
                paddingTop='25px'
                fontSize="20px"
            >
                Today is {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
            </Box>

            <Box
                display="flex"
                justifyContent={"center"}

                style={{

                    borderStyle: "solid",
                    borderWidth: "0.2rem",
                    borderRadius: "0.5rem",
                }}
            >
                {/* Make the income log expandable and editable in place to quickly add new income */}
                {/* Show % of income that has been allocated */}
                <Box
                    paddingLeft="2rem"
                    paddingRight="1rem"
                    paddingTop="2.5rem"
                >
                    <img
                        src={moneyIcon}
                        alt="moneyLogo"
                        height="40px"
                        width="40px"
                    />
                </Box>
                <Box
                    padding="1rem"
                >
                    <Box>
                        SAVINGS
                    </Box>
                    <Box
                        overflow="hidden"
                        variant="outline"

                        sx={{

                            fontWeight: 'bold',
                            fontSize: "30px",
                            marginBottom: "2rem",
                        }}

                    >
                        ${income}

                    </Box>


                    <Box
                        width="12rem"
                        height ="3.5rem"
                        style={{

                            borderStyle: "solid",
                            borderWidth: "0.2rem",
                            borderRadius: "0.5rem",
                        }}
                    >   
                        <TextField
                            style={{
                                width:"10rem",
                                float:"left",
                            }}>

                        </TextField>
                        <Box 
                            width="20px"
                            height="40px"
                            float="right"
                            display="flex"
                            flexWrap="wrap"
                        >
                            <img
                                width="28px"
                                height="28px"
                                alt="plus"
                                src={plus} onClick ={handleAdd}></img>
                            <img
                                width="28px"
                                height="28px"
                                src={minus}
                                alt="minus"
                                onClick = {handleSubtract}></img>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}