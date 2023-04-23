import React, { useState } from "react"
import {Grid, Box, Button, TextField} from "@mui/material";

export default function IncomeDisplay(){

    const currentDate = new Date();

    //Add income from db here
    const income = 1210000000000;


    const [editVisible, setEditVisible] = useState(false);
    const [buttonText, setEditButtonText] = useState("edit");

    const toggleEditVisible = ()=> {

        if(editVisible === true){
            setEditVisible(false);
            setEditButtonText("edit");
            alert("Income Added");
        }else{
            setEditVisible(true);
            setEditButtonText("submit");
        }
    }

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
                    {(editVisible)?(
                        <Box
                            style={{
                                borderStyle:"solid",
                                borderWidth:"0.2rem",
                                borderRadius:"0.5rem",
                            }}
                            
                            overflow="hidden"
                        
                            sx={{
                                width:"10vw",
                                fontWeight:'bold',
                                fontSize:"30px",
                                marginBottom:"2rem",
                            }}     
                        >
                            <TextField
                                placeholder={'$' + income}
                            
                            >

                            </TextField>
                        </Box>
                    ):(
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
                            
                        </Box>)
                    }
                </Grid>
                <Grid
                    item
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
                        
                        onClick={toggleEditVisible}
                    >
                        {buttonText}
                    </Button>
                   
                </Grid>
            </Grid>

    )
}