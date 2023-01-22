



export default function BudgetViewPort(){

    return(

        <div className="budget-viewport">
            
            TODO An easy way to add money gained or lost would be cool, add or subtract money in 2 taps,
                pull from api amounts spent for each day,
                total amount spent for each day
                total amount spent for each week
                total amount saved per week
                How closely you are matching your goals for each week
                How many more weeks until you are meeting your financial goals
                Store income, bills, debits and credits


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