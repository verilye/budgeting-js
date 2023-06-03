import { LinearProgress, Box, TextField, Button } from "@mui/material"
import EditGoalDialog from "./dialogs/edit_goal_dialog";
import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthContext";

export default function Goal({ goal_id, category_id, target_amount, target_progress, fetchData }) {

    let {user, income, setIncome, storeLocally} = useContext(AuthContext);
    let [addedAmount, setAddedAmount] = useState("");

    const handleAdd = async () => {
        try {
            // Subtract income then allocate that amount to goal
            let newProgress = target_progress + parseInt(addedAmount);
            let newIncome = income - parseInt(addedAmount);

            await fetch("http://localhost:4000/budgeting/edit-goal", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': user.token
                },
                body: JSON.stringify({
                    user_id: user.user_id,
                    category_id: category_id,
                    goal_id: goal_id,
                    target_progress: newProgress,
                    target_amount: target_amount,
                })
            })

            await fetch("http://localhost:4000/budgeting/edit-income", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': user.token
                },
                body: JSON.stringify({
                    user_id: user.user_id,
                    income: newIncome
                })
            })

            setIncome(newIncome);
            storeLocally(user, newIncome);
            fetchData();

        } catch (err) {
            console.log(err)
        }
    }


    // Progress = % of (target_amount) that (target_progress) is 
    let progress = (target_progress / target_amount) * 100;

    return (

        <Box className='goal'

            display="flex"
            justifyContent="flex-start"
            sx={{
                height: '100px',
                padding: '5px',
                margin: '5px',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'black',
            }}

        >
            <Box

                textAlign="center"
                sx={{
                    marginTop: "5px",
                    height: "40px",
                    width: "150px",
                    float: "left",
                    padding: "20px",
                    overflow: "hidden",

                }}
            >
                {goal_id}
            </Box>
            <EditGoalDialog
                goal_id={goal_id}
                category_id={category_id}
                fetchData={fetchData}
            />
            <Box
                marginTop="1rem"
                display="flex"
                justifyContent="flex-start"
            >
                <Box
                    padding="20px"
                >
                    {target_progress}/{target_amount}
                </Box>
                {/* Monetary values here */}
                {/* The progress value should be a number out of 100.*/}
                <LinearProgress

                    sx={{
                        width: "24rem",
                        paddingTop: "5px",
                        marginTop: "25px",
                        height: "0.5rem",
                        backgroundColor: 'gray',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: "green"
                        }
                    }}
                    variant="determinate"
                    value={progress}>

                </LinearProgress>
            </Box>
            <Box
                marginLeft="40px"
                marginTop="1.5rem"
                display="flex"
                justifyContent="center"
            >
                <Box
                    height="55px"
                    display="flex"
                    justifyContent="flex-start"

                >
                    <TextField
                        onInput={e => setAddedAmount(e.target.value)}
                        label="$ amount"
                        style={{
                            width: "8rem",
                        }}>

                    </TextField>
                    <Button
                        sx={{
                            fontWeight: "bold",
                            backgroundColor: "green",
                            color: "white",
                            "&:hover": {
                                color: "green",
                                bgcolor: "#FFFFFF",
                                borderStyle: "solid",
                            }
                        }}

                        onClick={handleAdd}
                    >
                        add
                    </Button>
                </Box>
            </Box>

        </Box>

    )
}