
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function handleChangeTitle(event) {
    setEnteredTitle(event.target.value);
  }

  function handleChangeAmount(event) {
    setEnteredAmount(event.target.value);
  }

  function handleChangeDate(event) {
    setEnteredDate(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();

    const dataForm = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(dataForm);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleChangeAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-12"
            value={enteredDate}
            onChange={handleChangeDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm;