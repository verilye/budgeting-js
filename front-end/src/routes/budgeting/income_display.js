import React, { useContext, useState } from "react"
import { Box, Button, TextField } from "@mui/material";
import moneyIcon from "../../images/money.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import { AuthContext } from "../../authentication/AuthContext";


export default function IncomeDisplay() {

    const currentDate = new Date();
    const { user, income, setIncome, storeLocally } = useContext(AuthContext);
    const [incomeValue, setIncomeValue] = useState("");
    const [error, setError] = useState(false);

    const addIncome = () => {
        setError(false);
        handleIncome(false);
    }

    const subtractIncome = () => {
        setError(false);
        if ((income - parseInt(incomeValue)) < 0) {
            setError(true);
        } else {

            handleIncome(true);
        } 
    }

    const handleIncome = async (negative) => {

        let newIncome = parseInt(incomeValue);

        if (negative === true) {
            newIncome = income - newIncome;

        } else {
            newIncome = newIncome + income
        };

        console.log(newIncome);
        console.log(user.token);

        try {
            await fetch("https://budgeting-js-back-end.azurewebsites.net/budgeting/edit-income", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': user.token
                },
                body: JSON.stringify({
                    user_id: user.user_id,
                    income: newIncome,
                })
            });

            setIncome(newIncome);
            storeLocally(user, newIncome);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Box>
            <Box
                margin="2rem"
                marginLeft="4rem"
                display="flex"
                justifyContent="flex-start"
                columnGap="22vw"
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
                            width="12.5rem"
                            height="3.5rem"
                            style={{

                                borderStyle: "solid",
                                borderWidth: "0.2rem",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <TextField
                                onInput={e => setIncomeValue(e.target.value)}
                                style={{
                                    width: "10rem",
                                    float: "left",
                                }}>

                            </TextField>
                            <Box

                                height="40px"
                                float="right"
                            >
                                <Button

                                    onClick={addIncome}
                                    sx={{
                                        width: "40px",
                                        height: "30px",
                                        padding: "0px",
                                        minWidth: "20px",
                                        minHeight: "20px",
                                    }}
                                >
                                    <img
                                        width="25px"
                                        height="25px"
                                        alt="plus"
                                        src={plus}
                                    ></img>
                                </Button>
                                <Button
                                    onClick={subtractIncome}
                                    sx={{
                                        width: "40px",
                                        height: "20px",
                                        padding: "0px",
                                        minWidth: "20px",
                                        minHeight: "20px",
                                    }}
                                >
                                    <img
                                        width="25px"
                                        height="25px"
                                        src={minus}
                                        alt="minus"
                                    >
                                    </img>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    marginTop='1.5rem'
                    width="10rem"
                >

                </Box>
                <Box
                    paddingTop='3rem'
                    fontSize="25px"
                >
                    Today is {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
                </Box>

            </Box>
            {error ? (
                <Box marginLeft={'5vw'} marginBottom={'3vh'}>Income cant be less than 0!</Box>

            ) : null}
        </Box>
    )
}