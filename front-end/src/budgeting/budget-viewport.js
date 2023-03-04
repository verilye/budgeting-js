import './budget.css';


export default function BudgetViewPort(){

    return(

        <div className="budget-viewport">
            
            {/* TODO An easy way to add money gained or lost would be cool, add or subtract money in 2 taps,
                pull from api amounts spent for each day,
                total amount spent for each day
                total amount spent for each week
                total amount saved per week
                How closely you are matching your goals for each week
                How many more weeks until you are meeting your financial goals
                 Store income, bills, debits and credits

            // Use css grid to set up a layout here */}
            <div class ="income-outcome">
                <div className="totals income"> INCOME</div>
                <div className="totals income-total"> $1000</div>
                <div className="totals outcome"> OUTCOME</div>
                <div className="totals outcome-total"> $200000</div>
                
                <div className="welcome">Welcome Lad</div>
            </div>

            <div className="date"> 
                    21/02/2018
                    Week 10 of 51
            </div>

            {/* Highlight the current day as a different color */}
        
            <div className="calendar">
                {/* Paginate data from the node api to form days of the week */}
                <div  className="day">
                   MONDAY
                   <div className="spending">
                        $200
                   </div>
                </div>
                <div  className="day">
                    TUESDAY
                    <div className="spending">
                        $200
                   </div>
                </div>
                <div className="day">
                    WEDNESDAY
                    <div className="spending">
                        $200
                   </div>
                </div>
                <div  className="day">
                   THURSDAY
                   <div className="spending">
                        $200
                   </div>
                </div>
                <div className="day">
                    FRIDAY
                    <div className="spending">
                        $200
                   </div>
                </div>
                <div className="day">
                    SATURDAY
                    <div className="spending">
                        $200
                   </div>
                </div>
                <div className="day">
                    SUNDAY
                    <div className="spending">
                        $200
                   </div>
                </div>
            </div>

            <div className="spending-log">
                <div> Spending Log
                    <div className="entry">-100 head replacement</div>
                    <div className="entry">-21 gym</div>
                    <div className="entry">-210 bills</div>
                    <div className="entry">-10 grocery</div>
                </div>
            </div>
        </div>
    )

}