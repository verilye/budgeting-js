import React from "react"
import {Grid, Box, Button} from "@mui/material";

export default function IncomeDisplay(){

    const currentDate = new Date();

    //Add income from db here
    const income = 600;

    return(
            
            <Grid container
                spacing={"5vw"}
                className="income-info"
                sx={{
                    fontSize:"30px",
                    
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
                        {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
                    </Box>
                </Grid>

                {/* This component should be clickable - its where you add your income */}
                <Grid item 
                    xs={2}
                    className='income'
                    fontSize="15px"
                >
                    <Box>
                        INCOME
                    </Box>
                    <Button

                        style={{
                            borderStyle:"solid",
                            borderWidth:"0.2rem",
                        }}
                        
                        variant="outline"
                      
                        sx={{
                            fontWeight:'bold',
                            fontSize:"30px",
                            
                        }}     
                                       
                    >
                        ${income}
                    </Button>
                    
                </Grid>
            </Grid>

    )
}