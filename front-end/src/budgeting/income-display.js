import React from "react"

import "./income-display.css"
import { Container } from "@mui/material";



export default function IncomeDisplay(){

    return(

        <div className='income-display'>
            
            <Container className="income-container">
                {/* Break it down into smaller components. There should be a separate one for the 
                    income text, buttons etc */}
                <div className="income-info">
                    
                    <div className="date">
                    
                        MONTH:YEAR
                    
                    </div>

                    <div className='income'>
                        $600
                    </div>
                </div>
            </Container>
        </div>

    )
}