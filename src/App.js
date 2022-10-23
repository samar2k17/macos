import React from "react";
import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/input/NewExpense";
const json = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

const App = () => {
  const [from,to]=useState(json);
  const Addit = (New_Expense_data) => {
    to((prevstate)=>{
      return [...prevstate,New_Expense_data];
    });
  };
  return (
    <div>
    <NewExpense onAdd={Addit}/>
    <Expenses item={from}/>
    </div>
  );
};

export default App;
