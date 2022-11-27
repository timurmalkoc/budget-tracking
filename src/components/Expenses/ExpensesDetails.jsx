import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpensesDetails = props => {
    return(
        props.expenses.map(({title, amount, date}, idx) => { return(<ExpenseItem title={title} amount={amount} date={date} key={idx}/>)})
    );
};

export default ExpensesDetails;