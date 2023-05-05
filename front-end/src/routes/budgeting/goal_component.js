import { LinearProgress, Box, TextField, Button } from "@mui/material"

export default function Goal(props) {

    // Get the progress value as a percentage of the total 
    let progress = 25;


    return (

        <Box className='goal'

            display="flex"
            justifyContent="flex-start"
            sx={{

                padding: '5px',
                margin: '5px',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'black',
            }}

        >
            <Box
                sx={{
                    height: "50px",
                    width: "150px",
                    float: "left",
                    padding: "15px",
                    overflow: "hidden",

                }}
            >
                Pina colada and getting caught in the rain
            </Box>
            <Box
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
                display="flex"
                justifyContent="center"
            >
                <Box
                    height="55px"
                    marginTop="10px"
                    display="flex"
                    justifyContent="flex-start"
                    style={{
                        borderStyle: "solid",
                        borderWidth: "0.2rem",
                        borderRadius: "0.5rem",
                    }}
                >
                    <TextField
                        label="$"
                        style={{
                            width: "8rem",
                        }}>

                    </TextField>
                    <Button
                        sx={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        add
                    </Button>
                </Box>
                <Button

                    sx={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    edit
                </Button>
            </Box>

        </Box>

    )
}