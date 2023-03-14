import React from "react"

import {Container, Grid, Box } from "@mui/material";



export default function IncomeDisplay(){

    return(
            
            <Grid 
                spacing={"32.5vw"}
                className="income-info"
                sx={{
                    fontSize:"30px",
                    padding:"10px",
                }}
            >
                
                <Grid item className="date"

                    sx={{
                        
                    }}
                >
                    MONTH:YEAR
                </Grid>

                {/* This component should be clickable - its where you add your income */}
                <Grid item 
                    sx={{
                        
                        height:"4rem",
                        borderStyle:"solid",
                        borderRadius:2,
                        borderColour:"black",

                    }}
                    className='income'
                >
                    $600
                </Grid>
            </Grid>

    )
}