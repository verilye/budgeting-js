import { LinearProgress, Box, TextField, Button } from "@mui/material"

export default function Goal(props) {

    // Get the progress value as a percentage of the total 
    let progress = 25;


    return (

        <Box className='goal'
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
                    float: "left",
                    padding: "5px",
                    width: "10vw"
                }}
            >
                New Car
            </Box>
            <Box
                sx={{

                }}
            >$1250/$5000</Box>
            {/* Monetary values here */}
            {/* The progress value should be a number out of 100.*/}
            <LinearProgress
                sx={{
                    height: "0.5rem",
                    backgroundColor: 'gray',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: "green"
                    }
                }}
                variant="determinate"
                value={progress}>

            </LinearProgress>

            <Box
                marginTop ="10px"
                display="flex"
                justifyContent="flex-start"
                style={{

                    borderStyle: "solid",
                    borderWidth: "0.2rem",
                    borderRadius: "0.5rem",
                }}
            >
                <TextField
                    style={{
                        width: "8rem",
                        float: "left",
                    }}>

                </TextField>
                <Box
                    width="20px"
                    height="40px"
                    display="flex"
                    justifyContent="flex-start"
                >
                    <Button

                    >
                        b1
                    </Button>
                    <Button
                       float="right"
                    >
                        b2
                    </Button>
                </Box>
            </Box>

        </Box>

    )
}