import './budget.css';
import React from 'react';

export default function BudgetViewPort(){


    return(

        <div className="budget-viewport">
            
            {/* TODO 
                This section should display goals in categories

                Users should be able to create categories (a container for goals)
                
                This page should be scrollable and dynamics so that it can display all goals

                A goal should be a bubble box that has a progress bar and a subtotal and goal

                Income should be displayed up the top

            */}

            <div className ="logo-bar">
                <div className='logo'> budgeting-js </div>
            </div>

            <div className ="content">
                    {/* Make the income log expandable and editable in place to quickly add new income */}
                    {/* Show % of income that has been allocated */}
                <div className='income-log'>
                    INCOME: $600 - 24th March 2023 
                    {/* Put all this on the same line as income to make it look tidier */}
                    <div className='income-manip'>
                        + 
                        - 
                        <img className="history" src="history.png" alt="history"></img>
                    </div>
                </div>
                <div className='category-display'>
                    CATEGORIES:
                    {/* Paginate categories and goals here */}  
                    {/* Categories should be scalable in size, goals should not  */}

                    <div className='category'>
                        Bills:
                        <div className='goal'>RENT</div>
                        <div className='goal'>PHONE</div >
                    </div>

                    <div className='category'>
                        Groceries:
                        <div className='goal'></div>   
                    </div>

                    <div className='category'>
                        Frogs:
                        <div className='goal'></div>
                    </div>
                    


                </div>



            </div>
         
        </div>
    )

}