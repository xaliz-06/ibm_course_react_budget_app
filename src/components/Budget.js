import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        
        setNewBudget(event.target.value);
    }

    const handleChangeBudgetHandler = (e) => {
        if (newBudget> 20000) {
            alert('The value cannot exceed 20000');
        }
        if (newBudget < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
<button type='button' onClick={handleChangeBudgetHandler}>✅</button>
</div>
    );
};
export default Budget;
