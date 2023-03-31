import { LinearProgress } from "@mui/material"
import { Box } from "@mui/system"

export default function Goal(){
    
    // Get the progress value as a percentage of the total 
    let progress = 25;


    return(

        <Box className='goal'
            sx={{
                height:'2rem',
                padding:'5px',
                margin:'5px',
                borderRadius:'0.5rem',
                borderStyle: 'solid',
                borderColor: 'black',
            }}

        >
            GOAL       {/* Monetary values here */}
            {/* The progress value should be a number out of 100.*/}
            <LinearProgress 
                sx={{
                    backgroundColor: 'black',
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