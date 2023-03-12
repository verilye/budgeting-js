import React from "react"

import "./income-display.css"



export default function IncomeDisplay(){

    return(

        <div className='income-display'>
            
            <div className="income-container">
                {/* Break it down into smaller components. There should be a separate one for the 
                    income text, buttons etc */}
                <div className="income-info">
                    
                    <div className="date">
                    
                        MONTH:YEAR
                    
                    </div>

                    <div className="income-manip">
                        <div className='income'>
                            $600
                        </div>
                        <button>
                            + 
                        </button>
                        <button>
                            - 
                        </button>
                        <button>
                            <img className="history" src="history.png" alt="history"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}