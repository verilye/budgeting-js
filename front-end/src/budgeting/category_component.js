import React from "react"
import { Box } from "@mui/system"
import Goal from "./goal_component"

export default function Category(){


    return(

        <Box>
            <Box className='category'
            
            sx={{

                fontSize:'1rem',
                height:'8rem',
                padding:'10px',
                margin:'10px',
                borderRadius: '1rem',
                borderStyle: 'solid',
                borderColor: 'black',
            }}
            
            >
                Category:
                {/* populate with goals */}
                <Goal/>
                <Goal/>
            </Box>
        </Box>
    )
}