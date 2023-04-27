import React, { useContext, useRef } from "react"
import { Box, TextField } from "@mui/material";

import moneyIcon from "../../images/money.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import { AuthContext } from "../../authentication/AuthContext";


export default function IncomeDisplay() {

    //Add income from db here
    const incomeValue = useRef('');
    const income = 1210.21;
    const currentDate = new Date();
    const user = useContext(AuthContext);

    // Inspiration for visual design
    // https://dribbble.com/shots/18563580-Web-App

    const handleIncome = async ()=>{

        let amount = incomeValue;
        console.log("handleIncomeActivated");

        let income = user.income;
        let user_id = user.user_id;

        if(amount>0){

            income = income + amount;

            const res = await fetch("http://localhost:4000/user-access/add-income", {
                method: "POST",
                mode: 'cors',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id:user_id,
                    income: income,
                }),
            });

            if (res === 200) { 
                console.log("income incorporated");
            }
        }

    }

    return (
        <Box
            margin="2rem"
            marginLeft ="4rem"
            display="flex"
            justifyContent="flex-start"
            columnGap="65vw"
        >
            <Box
                display="flex"
                justifyContent={"space-between"}

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
                        AVAILABLE BALANCE
                    </Box>
                    <Box
                        overflow="hidden"
                        variant="outline"

                        sx={{

                            fontWeight: 'bold',
                            fontSize: "30px",
                            marginBottom: "0.5rem",
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
                            inputRef={incomeValue}
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
                                src={plus} onClick ={handleIncome}></img>
                            <img
                                width="28px"
                                height="28px"
                                src={minus}
                                alt="minus"
                                onClick = {handleIncome}></img>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                paddingTop='3rem'
                fontSize="25px"
            >
                Today is {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
            </Box>
        </Box>
    )
}