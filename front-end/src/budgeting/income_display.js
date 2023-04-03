import React from "react"
import {Grid, Box, Button, TextField} from "@mui/material";

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
                            margin:"1vw"
                        }}                    
                    >
                        {currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
                    </Box>
                </Grid>

                {/* This component should be clickable - its where you add your income */}
                <Grid item 
                    xs={3}
                    className='income'
                    fontSize="13px"
                >
                    <Box>
                        INCOME - click to edit
                    </Box>
                        <Button

                            style={{
                                borderStyle:"solid",
                                borderWidth:"0.2rem",
                                borderRadius:"0.5rem",
                            }}
                            
                            variant="outline"
                        
                            sx={{
                                width:"10vw",
                                fontWeight:'bold',
                                fontSize:"30px",

                                ":hover":{
                                    color:"white",
                                    backgroundColor:"black",
                                },
                            }}     
                                        
                        >
                            ${income}
                            
                        </Button>
                        {/* Hide submit button while income textfield isnt selected */}
                        <Button>
                            Submit
                        </Button>
                </Grid>
            </Grid>

    )
}