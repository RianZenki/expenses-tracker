import { useState } from "react";

import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

export const NewExpense = (props) => {
	const [isShowingForm, setIsShowingForm] = useState(false);

	const showFormHandler = () => {
		setIsShowingForm((prevState) => !prevState);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// console.log(expenseData)
		props.onAddExpense(expenseData);
		setIsShowingForm(false)
	};

	return (
		<div className="new-expense">
			{isShowingForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onShowForm={showFormHandler}
				/>
			)}
			{!isShowingForm && (
				<button onClick={showFormHandler}>Add New Expense</button>
			)}
		</div>
	);
};
