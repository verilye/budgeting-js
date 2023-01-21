



export default function BudgetViewPort(){

    return(

        <div className="budget-viewport">
            
            An easy way to add money gained or lost would be cool, add or subtract money in 2 taps 

            <div className="income"> click into this menu to adjust income from job, side gigs or other</div>
            <div className="bills"> click to set repeatable costs</div>
            
            <div className="calendar">
                Paginate data from the node api to form days of the week
                <div className="day">
                    Each day of the week should have a running total + display all costs that have accrued
                </div>
            </div>
        </div>
    )

}