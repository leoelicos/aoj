import { useEffect, useState } from 'react'
import './style/styles.css'

export default function CreditCardForm() {
  const [imgCardNumber, setImgCardNumber] = useState('4242 4242 4242 4242')
  const [imgCardHolder, setImgCardHolder] = useState('Amy Dutton')
  const [imgExpirationMonth, setImgExpirationMonth] = useState(12)
  const [imgExpirationYear, setImgExpirationYear] = useState(2022)
  const [imgCVV, setImgCVV] = useState(123)

  const [inputCardNumber, setInputCardNumber] = useState('')
  const [inputCardHolder, setInputCardHolder] = useState('')
  const [inputExpirationMonth, setInputExpirationMonth] = useState(null)
  const [inputExpirationYear, setInputExpirationYear] = useState(null)
  const [inputCVV, setInputCVV] = useState('')

  const [flip, setFlip] = useState(false)
  const [cardType, setCardType] = useState('discover')

  useEffect(() => {
    setImgCVV(inputCVV)
  }, [inputCVV])

  return (
    <div className='aoj-22'>
      <div className='body'>
        <div className='wrapper'>
          <div className={`credit-card__wrapper ${cardType} ${flip ? 'flip' : ''}`}>
            <div className='credit-card__inner'>
              <div className='credit-card--front'>
                <div className='card-number'>
                  <div className='card-number__shadow shadow'>{imgCardNumber}</div>
                  <div className='card-number__emboss emboss'>{imgCardNumber}</div>
                </div>
                <div className='card-holder'>
                  <div className='card-holder__shadow shadow'>{imgCardHolder}</div>
                  <div className='card-holder__emboss emboss'>{imgCardHolder}</div>
                </div>
                <div className='expiration-date'>
                  <div className='expiration-date__shadow shadow'>
                    {imgExpirationMonth}/{imgExpirationYear}
                  </div>
                  <div className='expiration-date__emboss emboss'>
                    {imgExpirationMonth}/{imgExpirationYear}
                  </div>
                </div>
              </div>
              <div className='credit-card--back'>
                <div className='signature'>{imgCardHolder}</div>
                <div className='cvv'>{imgCVV}</div>
              </div>
            </div>
          </div>

          <div className='form'>
            <form action=''>
              <div className='row'>
                <div className='field'>
                  <label htmlFor='card-number'>Card Number</label>
                  <input
                    type='text'
                    name='card-number'
                    value={inputCardNumber}
                    onChange={(e) => {
                      let n = e.target.value
                      if (n.startsWith('34') || n.startsWith('37')) setCardType('american')
                      else if (n.startsWith('4')) setCardType('visa')
                      else if (n.startsWith('5')) setCardType('mastercard')
                      else if (n.startsWith('6')) setCardType('discover')
                      setInputCardNumber(n)
                    }}
                    onBlur={(e) => {
                      setImgCardNumber(inputCardNumber)
                    }}
                  />
                </div>

                <div className='field'>
                  <label htmlFor='card-holder'>Card Holder</label>
                  <input
                    type='text'
                    name='card-holder'
                    onChange={(e) => {
                      setInputCardHolder(e.target.value)
                    }}
                    onBlur={(e) => {
                      setImgCardHolder(inputCardHolder)
                    }}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='field option__wrapper'>
                  <label>Expiration Date</label>
                  <div className='field__option'>
                    <select
                      name='expiration-date-month'
                      id=''
                      onChange={(e) => {
                        setInputExpirationMonth(e.target.value)
                      }}
                      onBlur={(e) => {
                        setImgExpirationMonth(inputExpirationMonth)
                      }}>
                      <option>Month</option>
                      {new Array(12).fill(0).map((_, i) => (
                        <option
                          key={i}
                          value={i + 1}>
                          {(i + 1).toString().padStart(2, '0')}
                        </option>
                      ))}
                    </select>

                    <select
                      name='expiration-date-year'
                      id=''
                      onChange={(e) => {
                        setInputExpirationYear(e.target.value)
                      }}
                      onBlur={(e) => {
                        setImgExpirationYear(inputExpirationYear)
                      }}>
                      <option>Year</option>
                      {new Array(12).fill(0).map((_, i) => (
                        <option
                          key={i}
                          value={i + new Date().getFullYear()}>
                          {i + new Date().getFullYear()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='field'>
                  <label htmlFor='cvv'>CVV</label>
                  <input
                    type='number'
                    name='cvv'
                    onChange={(e) => {
                      setInputCVV(e.target.value)
                    }}
                    onBlur={(e) => {
                      setFlip(false)
                    }}
                    onFocus={(e) => {
                      setFlip(true)
                    }}
                  />
                </div>
              </div>

              <div className='row'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <script src='app.js'></script>
      </div>
    </div>
  )
}
