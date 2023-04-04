import React from "react"
import {Grid, Box, Button, TextField} from "@mui/material";

export default function IncomeDisplay(){

    const currentDate = new Date();

    //Add income from db here
    const income = 1210000000000;

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
                    xs={2}
                    className='income'
                    width="10vw"
                    fontSize="13px"
                >
                    <Box>
                        INCOME
                    </Box>
                    <Box

                        style={{
                            borderStyle:"solid",
                            borderWidth:"0.2rem",
                            borderRadius:"0.5rem",
                        }}
                        
                        overflow="hidden"
                        variant="outline"
                    
                        sx={{
                            width:"10vw",
                            fontWeight:'bold',
                            fontSize:"30px",
                            marginBottom:"2rem",
                        }}     
                                    
                    >
                        ${income}
                        
                    </Box>
                </Grid>
                <Grid
                    xs={1}
                >
                    <Button
                        sx={{
                            marginTop:'7rem',
                            height:'2rem',
                            width:"0.5rem",
                            fontWeight:"bold",
                            color:"white",
                            backgroundColor:"black",
                            ":hover":{
                                borderStyle:"solid",
                                borderWidth:"0.1rem",
                                color:"black",
                                backgroundColor:"white",
                            }
                        }}
                    >
                        edit
                    </Button>
                   
                </Grid>
                <Grid
                    xs={1}
                >
                    <TextField>

                    </TextField>
                </Grid>
            </Grid>

    )
}