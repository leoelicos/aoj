import './style/styles.css'
import { ReactComponent as Success } from './images/success.svg'
import { ReactComponent as Error } from './images/error.svg'

export default function SignupForm() {
  return (
    <div className='aoj-19'>
      <div className='body'>
        <form action=''>
          <h1>Signup</h1>
          <div className='field'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder=' '
            />
            <label htmlFor='name'>Name</label>
            <div className='error'>
              <Error />
              &nbsp;A name is required
            </div>
            <div className='success'></div>
          </div>
          <div className='field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder=' '
            />
            <label htmlFor='email'>Email</label>
            <div className='error'></div>
            <div className='success'>
              <Success />
            </div>
          </div>
          <div className='field'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder=' '
            />
            <label htmlFor='password'>Password</label>
            <button className='show-hide'></button>
            <div className='error'></div>
            <div className='success'></div>
          </div>
          <div className='field show'>
            <input
              type='text'
              name='confirm-password'
              id='confirm-password'
              placeholder=' '
            />
            <label htmlFor='confirm-password'>Confirm Password</label>
            <button className='show-hide'></button>
            <div className='error'></div>
            <div className='success'></div>
          </div>
          <div className='field'>
            <input
              type='submit'
              name='submit'
              value='Submit'
            />
          </div>
        </form>
        <script src='app.js'></script>
      </div>
    </div>
  )
}
