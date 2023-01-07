import { useState } from 'react'
import './style/styles.css'

export default function TipCalculator() {
  const tipOptions = [5, 10, 15, 20]
  const [billAmount, setBillAmount] = useState(100)
  const [tip, setTip] = useState(15)
  const [people, setPeople] = useState(3)
  const [editing, setEditing] = useState(true)

  const [tipAmount, setTipAmount] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  const handleCalculate = () => {
    const newTipAmount = ((tip / 100) * billAmount).toFixed(2)
    const newTotalPerPerson = (((1 + tip / 100) * billAmount) / people).toFixed(2)

    setTipAmount(newTipAmount)
    setTotalPerPerson(newTotalPerPerson)
    setEditing(false)
  }

  const handlePeopleChange = (e) => {
    setEditing(true)
    setPeople(e.target.value)
  }

  const handleBillChange = (e) => {
    setEditing(true)
    setBillAmount(e.target.value)
  }

  return (
    <div className='aoj-07'>
      <div className='body'>
        <div className='wrapper'>
          <div className='tip-amount'>
            <div className='label'>Tip Amount</div>
            <div className='dollars'>
              <sup>$</sup>
              <span
                id='tip-amount'
                className={editing ? 'red' : ''}>
                {tipAmount}
              </span>
            </div>
          </div>
          <div className='total-per-person'>
            <div className='label'>Total Per Person</div>
            <div className='dollars'>
              <sup>$</sup>
              <span
                id='total-per-person'
                className={editing ? 'red' : ''}>
                {totalPerPerson}
              </span>
            </div>
          </div>

          <div className='input-fields'>
            <div className='bill-amount'>
              <div className='field'>
                <input
                  type='text'
                  id='bill-amount'
                  name='bill-amount'
                  value={billAmount}
                  onChange={handleBillChange}
                />
              </div>
              <div className='label'>Bill Amount</div>
            </div>
            <div className='number-of-people'>
              <div className='field'>
                <input
                  type='text'
                  id='number-of-people'
                  name='number-of-people'
                  value={people}
                  onChange={handlePeopleChange}
                />
              </div>
              <div className='label'>Number of People</div>
            </div>
          </div>

          <div className='tip-percentages'>
            {tipOptions.map((v) => (
              <div key={v}>
                <input
                  id={v}
                  type='radio'
                  name='tip'
                  value={v}
                  checked={v === +tip}
                  onChange={(e) => {
                    setEditing(true)
                    setTip(e.target.value)
                  }}
                />
                <label htmlFor={v}>{v}%</label>
              </div>
            ))}
          </div>
          <div className='button-wrapper'>
            <button
              id='calculate'
              onClick={handleCalculate}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
