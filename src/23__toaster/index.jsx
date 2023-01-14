import { ReactComponent as Arrow } from './images/arrow.svg'
import { ReactComponent as Close } from './images/close.svg'

import './style/styles.css'

export default function Toaster() {
  return (
    <div className='aoj-23'>
      <div className='body'>
        <div className='toaster'>
          <div className='close'>
            <button
              className='close-toaster'
              id='closeToaster'>
              <Close />
              &nbsp; Close
            </button>
          </div>
          <img
            src={require('./images/cover.jpg')}
            alt='Compressed.fm Cover'
            className='cover'
          />
          <h1>
            GET FREE
            <br />
            STUFF
            <br />
            IN YOUR INBOX
          </h1>
          <p>We try to include additional information and companion resources with each podcast episode. Sign up now to be included in the fun.</p>
          <form action=''>
            <div className='field'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                id='email'
              />
            </div>
            <button
              className='submit'
              id='submit'>
              <Arrow />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
