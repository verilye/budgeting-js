import { LinearProgress, Box, TextField, Button } from "@mui/material"

export default function Goal({goal_id,target_amount,target_progress, fetchData}) {


    const handleEdit =()=>{

        // TODO
        // This needs to be a dialogue

        // change goal amount
        // change progress amount
        // delete
    }

    const handleAdd=()=>{
        // post (added amount + current amount) to db
    }


    // Progress = % of (target_amount) that (target_progress) is 
    let progress = target_amount / target_progress;

    return (

        <Box className='goal'

            display="flex"
            justifyContent="flex-start"
            sx={{
                height:'100px',
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
                    marginTop:"5px",
                    height: "40px",
                    width: "150px",
                    float: "left",
                    padding: "20px",
                    overflow: "hidden",

                }}
            >
                {goal_id} 
            </Box>
            <Button

                sx={{
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                    height: "1rem",
                    padding: "1rem",
                    margin: "1.5rem",
                    marginTop:"2rem",
                    "&:hover": {
                        color: "black",
                        bgcolor: "#FFFFFF",
                        borderStyle: "solid",
                    }
                }}
                onClick={handleEdit}
            >
                edit
            </Button>
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

                        onClick ={handleAdd}
                    >
                        add
                    </Button>
                </Box>
            </Box>

        </Box>

    )
}