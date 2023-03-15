import { Box } from "@mui/system"


export default function Goal(){

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
            {/* https://www.freecodecamp.org/news/content/images/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png
                Inspiration for goal loading bar */}
            GOAL
            
        </Box>

    )
}