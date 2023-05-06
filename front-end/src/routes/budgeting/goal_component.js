import { LinearProgress, Box, TextField, Button } from "@mui/material"

export default function Goal(props) {

    // Get the progress value as a percentage of the total 
    let progress = 25;


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
                Pepperoni Pizza 
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
                    $1250/$5000
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
                        label="$amount"
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
                    >
                        add
                    </Button>
                </Box>
            </Box>

        </Box>

    )
}