import './style/styles.css'
import { ReactComponent as Trash } from './images/trash.svg'
import { ReactComponent as Plus } from './images/plus.svg'

export default function SimplifiedBudget() {
  return (
    <div className='aoj-21'>
      <div className='body'>
        <div className='wrapper'>
          <div className='add-panel'>
            <h1>Simplified Budget</h1>
            <div className='field'>
              <input
                type='text'
                name='income'
                id='income'
              />
              <label htmlFor='income'>Budget Amount</label>
            </div>
            <div className='add-expense'>
              <div className='field'>
                <input
                  type='text'
                  name='expense-name'
                  id='expense-name'
                />
                <label htmlFor='expense-name'>Expense</label>
              </div>
              <div className='field'>
                <input
                  type='text'
                  name='expense-amount'
                  id='expense-amount'
                />
                <label htmlFor='expense-amount'>Amount</label>
              </div>
              <button
                name='add-expense-button'
                id='add-expense-button'
                className='add-expense-button'>
                <Plus />
              </button>
            </div>
          </div>

          <div className='expenses-panel'>
            <h2>Expenses</h2>
            <div className='expense-table'>
              <div>Starbucks</div>
              <div>$5.54</div>
              <div className='delete'>
                <button
                  name='delete-expense'
                  className='delete-expense'>
                  <Trash />
                </button>
              </div>

              <div>Starbucks</div>
              <div>$5.54</div>
              <div className='delete'>
                <button
                  name='delete-expense'
                  className='delete-expense'>
                  <Trash />
                </button>
              </div>

              <div>Starbucks</div>
              <div>$5.54</div>
              <div className='delete'>
                <button
                  name='delete-expense'
                  className='delete-expense'>
                  <Trash />
                </button>
              </div>
            </div>
          </div>

          <div className='summary-panel'>
            <div className='summary-item'>
              <div className='summary-label'>Income</div>
              <div className='summary-amount'>$42,000.00</div>
            </div>

            <div className='summary-item'>
              <div className='summary-label'>Expenses</div>
              <div className='summary-amount'>$42,000.00</div>
            </div>

            <div className='summary-item'>
              <div className='summary-label'>Balance</div>
              <div className='summary-amount'>$42,000.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
