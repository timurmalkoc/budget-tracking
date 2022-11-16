import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className='expenses'>
            {  props.items.map(({title, amount, date}) => { return(<ExpenseItem title={title} amount={amount} date={date}/>)})  }
        </div>
    )
}

export default Expenses;
