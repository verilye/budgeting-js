import { LinearProgress } from "@mui/material"
import { Box } from "@mui/system"

export default function Goal(props){
    
    // Get the progress value as a percentage of the total 
    let progress = 25;


    return(

        <Box className='goal'
            sx={{
                width:'35vw',
                height:'2rem',
                padding:'5px',
                margin:'5px',
                borderRadius:'0.5rem',
                borderStyle: 'solid',
                borderColor: 'black',
            }}

        >
            <Box
                sx={{
                    float:"left",
                    padding:"5px",
                    width:"10vw"
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
                    height:"0.5rem",
                    backgroundColor: 'gray',
                    '& .MuiLinearProgress-bar':{
                        backgroundColor : "green"
                    }
                }}
                variant = "determinate" 
                value={progress}>

            </LinearProgress>
            
        </Box>

    )
}