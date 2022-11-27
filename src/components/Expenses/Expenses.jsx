import React, { useState } from 'react'
import ExpensesFilter from './Expensesfilter';
import ExpensesChart from './ExpensesChart';
import ExpensesDetails from './ExpensesDetails';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const emtyArrayMessage = "No expense found!";
    const filteredExpenses = props.items.filter(({date}) => {
        return date.getFullYear().toString() === filteredYear || filteredYear === 'All';
    })

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={(selectedYear) => {setFilteredYear(selectedYear)}}/>
            {  
            filteredExpenses.length === 0 ? <p className='expenses__emty'>{emtyArrayMessage}</p>:
            <>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesDetails expenses={filteredExpenses}/>
            </>
            }
        </div>
    )
}

export default Expenses;
