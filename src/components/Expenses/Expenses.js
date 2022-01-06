import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2020");

  const dateChanged = (dateSelected) => {
    const data = dateSelected.target.value;
    console.log(data);
    setSelectedDate(data);
    console.log(selectedDate);
  };

  const filteredYearExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedDate}
          onDateChanged={dateChanged}
        />
        <ExpensesChart expenses={filteredYearExpenses} />
        <ExpensesList items={filteredYearExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
