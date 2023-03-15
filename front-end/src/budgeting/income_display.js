import React from "react"

import {Container, Grid, Box } from "@mui/material";



export default function IncomeDisplay(){

    return(
            
            <Grid container
                spacing={"5vw"}
                className="income-info"
                sx={{
                    fontSize:"30px",
                    padding:"10px",
                }}
            >
                <Grid item 
                    xs={5}
                    className="date"
                >
                     <Box
                        sx={{
                            textAlign:'center',
                        }}                    
                    >
                        MONTH:YEAR
                    </Box>
                </Grid>

                {/* This component should be clickable - its where you add your income */}
                <Grid item 
                    xs={2}
                    className='income'
                    fontSize={"10px"}
                    textAlign={"right"}
                >
                    <Box
                        sx={{
                            textAlign:'center',
                            borderRadius:'0.5rem',
                            borderStyle:'solid',
                            borderColour:'black',
                            fontSize:'30px',
                        }}                    
                    >
                        $600
                    </Box>
                    + click to add/edit income
                </Grid>
            </Grid>

    )
}