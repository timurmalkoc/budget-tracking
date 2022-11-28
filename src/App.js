import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddUser from "./components/Users/AddUser";
import DisplayUser from "./components/Users/DisplayUser";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper',      amount: 94.12,  date: new Date(2020, 7, 14)},
  { id: 'e2', title: 'New TV',            amount: 799.49, date: new Date(2021, 2, 12)},
  { id: 'e3', title: 'Car Insurance',     amount: 294.67, date: new Date(2021, 3, 28)},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450,    date: new Date(2021, 5, 12)},
  { id: 'e5', title: 'Gasoline',          amount: 90,     date: new Date(2022, 6, 12)},
  { id: 'e6', title: 'Repaire Home',      amount: 1500,  date: new Date(2022, 8, 20)},
  { id: 'e7', title: 'Service',           amount: 50,     date: new Date(2021, 1, 10)},
  { id: 'e8', title: 'Move',              amount: 5000,   date: new Date(2020, 5, 15)},
  { id: 'e9', title: 'Equipment',         amount: 750,    date: new Date(2021, 7, 5)},
  { id: 'e10', title: 'Phone',            amount: 1000,   date: new Date(2022, 9, 20)},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);  
  const [user, setUser] = useState(null);

  return (
    <> 
      {
        user===null || user==='' ? <AddUser currentUser={user => {setUser(user)}}/> 
      :
        <>
        <DisplayUser currentUser={user}/>
        <NewExpense onAddExpense={expense => {setExpenses(prevExpenses => {return [expense, ...prevExpenses]})}}/>
        <Expenses items={expenses}/>
        </>
      }     
    </>
  );
}

export default App;
