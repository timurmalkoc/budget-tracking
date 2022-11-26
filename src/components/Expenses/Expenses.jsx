import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './Expensesfilter';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const emtyArrayMessage = "No expense found!";
    const fiteredExpenses = props.items.filter(({date}) => {
        return date.getFullYear().toString() === filteredYear || filteredYear === 'All';
    })

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={(selectedYear) => {setFilteredYear(selectedYear)}}/>
            {  
            fiteredExpenses.length === 0 ? <p className='expenses__emty'>{emtyArrayMessage}</p>:
            fiteredExpenses.map(({title, amount, date}, idx) => { return(<ExpenseItem title={title} amount={amount} date={date} key={idx}/>)})  
            }
        </div>
    )
}

export default Expenses;
