import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expense.css';

function Expense(props) {
  return (
    <Card className="expense">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  )
}

export default Expense;