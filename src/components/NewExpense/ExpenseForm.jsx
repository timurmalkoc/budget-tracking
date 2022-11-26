import React, { useState } from "react";
import './ExpenseForm.css';

const ExpneseForm = (props) =>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [btn, setBtn] = useState("hide")

    const submitHandler = (e) =>{
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        setBtn('hide');
    };


    if(btn==='hide')
    return(
        <button onClick={()=> {setBtn('show')}}>Add New Expense</button>
    );

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={(e) =>{setAmount(e.target.value)}}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={(e)=>{setDate(e.target.value)}}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={()=> {setBtn('hide')}}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpneseForm;