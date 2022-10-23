import React from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        {props.item.map((expense) => {
          return (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;
