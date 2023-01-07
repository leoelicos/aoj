import { useState } from 'react'
import './style/styles.css'

export default function RangeSlider() {
  const [dollars, setDollars] = useState(50)

  const handleDrag = (e) => {
    setDollars(e.target.value)
  }

  return (
    <div className='aoj-06'>
      <div className='body'>
        <div className='wrapper'>
          <div className='amount'>
            <sup>$</sup>
            <span className='dollars'>{dollars}</span>
          </div>
          <input
            type='range'
            id='priceRange'
            min='0'
            max='100'
            step='1'
            value={dollars}
            onChange={handleDrag}
          />
          <br />
          <button onClick={() => window.confirm(`Pay $${dollars}`)}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
