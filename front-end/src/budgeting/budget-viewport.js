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
                <div className="totals income-total"> 1000</div>
                <div className="totals bills"> BILLS</div>
                <div className="totals bills-total"> 500</div>
            </div>
        
            <div className="calendar">
                {/* Paginate data from the node api to form days of the week */}
                <div  className="day">
                   MON
                </div>
                <div  className="day">
                    TUE
                </div>
                <div className="day">
                    WED
                </div>
                <div  className="day">
                   THU
                </div>
                <div className="day">
                    FRI
                </div>
                <div className="day">
                    SAT
                </div>
                <div className="day">
                    SUN
                </div>
            </div>
        </div>
    )

}