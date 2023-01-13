import { Fragment } from 'react'
import './style/styles.css'
import { ReactComponent as Trash } from './images/trash.svg'
import { ReactComponent as Plus } from './images/plus.svg'
import { useState } from 'react'

export default function SimplifiedBudget() {
  const [expenses, setExpenses] = useState([
    { name: 'Starbucks', amount: 5.54, timeStamp: 1673623918070 },
    { name: 'Kroger', amount: 5.54, timeStamp: 1673623933021 },
    { name: 'Target', amount: 5.54, timeStamp: 1673623938877 }
  ])

  const [inputIncome, setInputIncome] = useState(42000)
  const [inputExpenseName, setInputExpenseName] = useState('')
  const [inputExpenseAmount, setInputExpenseAmount] = useState('')

  const handleDelete = (item) => {
    setExpenses((prev) => prev.filter((e) => e.timeStamp !== item.timeStamp))
  }

  const handleAdd = () => {
    setExpenses((prev) => [...prev, { name: inputExpenseName, amount: Number.parseFloat(inputExpenseAmount), timeStamp: Date.now() }])
  }

  return (
    <div className='aoj-21'>
      <div className='body'>
        <div className='wrapper'>
          <div className='add-panel'>
            <h1>Simplified Budget</h1>
            <div className='field'>
              <input
                type='number'
                name='income'
                id='income'
                value={inputIncome}
                onChange={(e) => setInputIncome(e.target.value)}
              />
              <label htmlFor='income'>Budget Amount</label>
            </div>
            <div className='add-expense'>
              <div className='field'>
                <input
                  type='text'
                  name='expense-name'
                  id='expense-name'
                  value={inputExpenseName}
                  onChange={(e) => setInputExpenseName(e.target.value)}
                />
                <label htmlFor='expense-name'>Expense</label>
              </div>
              <div className='field'>
                <input
                  type='number'
                  name='expense-amount'
                  id='expense-amount'
                  value={inputExpenseAmount}
                  onChange={(e) => setInputExpenseAmount(e.target.value)}
                />
                <label htmlFor='expense-amount'>Amount</label>
              </div>
              <button
                name='add-expense-button'
                id='add-expense-button'
                className='add-expense-button'
                onClick={handleAdd}
                value={inputExpenseName}
                disabled={inputExpenseName.length === 0 || inputExpenseAmount.length === 0}>
                <Plus />
              </button>
            </div>
          </div>

          <div className='expenses-panel'>
            <h2>Expenses</h2>
            <div className='expense-table'>
              {expenses.map((expense, i) => (
                <Fragment key={expense.timeStamp}>
                  <div>{expense.name}</div>
                  <div>${expense.amount}</div>
                  <div className='delete'>
                    <button
                      name='delete-expense'
                      className='delete-expense'
                      onClick={() => {
                        handleDelete(expense)
                      }}>
                      <Trash />
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className='summary-panel'>
            <div className='summary-item'>
              <div className='summary-label'>Income</div>
              <div className='summary-amount'>${parseFloat(inputIncome).toFixed(2)}</div>
            </div>

            <div className='summary-item'>
              <div className='summary-label'>Expenses</div>
              <div className='summary-amount'>${expenses.reduce((a, b) => a + b.amount, 0).toFixed(2)}</div>
            </div>

            <div className='summary-item'>
              <div className='summary-label'>Balance</div>
              <div className='summary-amount'>${(inputIncome - expenses.reduce((a, b) => a + b.amount, 0)).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
