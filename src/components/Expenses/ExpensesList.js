import { ExpenseItem } from "./ExpenseItem";

import "./ExpensesList.css";

export const ExpensesList = (props) => {
	let expensesContent = <p>No Expenses registered</p>;

	if (props.expenses.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{
				(expensesContent = props.expenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						amount={expense.amount}
					/>
				)))
			}
		</ul>
	);
};
