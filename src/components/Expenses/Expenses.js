import { useState } from "react";

import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
import { Card } from "../UI/Card";

import "./Expenses.css";

export function Expenses({ expenses }) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</li>
	);
}
