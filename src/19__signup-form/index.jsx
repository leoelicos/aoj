import './style/styles.css'
import { ReactComponent as Success } from './images/success.svg'
import { ReactComponent as Error } from './images/error.svg'
import { useState } from 'react'

export default function SignupForm() {
  const [nameField, setNameField] = useState('')
  const [nameFieldValid, setNameFieldValid] = useState(undefined)
  const [emailField, setEmailField] = useState('')
  const [emailFieldValid, setEmailFieldValid] = useState(undefined)
  const [passwordField, setPasswordField] = useState('')
  const [passwordFieldValid, setPasswordFieldValid] = useState(undefined)
  const [confirmPasswordField, setConfirmPasswordField] = useState('')
  const [confirmPasswordFieldValid, setConfirmPasswordFieldValid] = useState(undefined)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
              value={nameField}
              onChange={(e) => setNameField(e.target.value)}
              onBlur={(e) => {
                console.log('Validating name', e.target.value)
                if (e.target.value.length === 0) setNameFieldValid(false)
                else setNameFieldValid(true)
              }}
            />
            <label htmlFor='name'>Name</label>

            <div className={nameFieldValid === false ? 'error' : 'success'}>
              {nameFieldValid === false ? (
                <>
                  <Error />
                  &nbsp;A name is required
                </>
              ) : nameFieldValid === true ? (
                <Success />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder=' '
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
              onBlur={(e) => {
                let v = e.target.value
                console.log('Validating email', v, v.includes('@'))
                if (v.length === 0 || !v.includes('@') || !v.includes('.')) setEmailFieldValid(false)
                else setEmailFieldValid(true)
              }}
            />
            <label htmlFor='email'>Email</label>
            <div className={emailFieldValid === false ? 'error' : 'success'}>
              {emailFieldValid === false ? (
                <>
                  <Error />
                  &nbsp;A valid email is required
                </>
              ) : emailFieldValid === true ? (
                <Success />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='field'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder=' '
              value={passwordField}
              onChange={(e) => setPasswordField(e.target.value)}
              onBlur={(e) => {
                let v = e.target.value
                console.log('Validating password', v)
                if (v.length < 4) setPasswordFieldValid(false)
                else setPasswordFieldValid(true)
              }}
            />
            <label htmlFor='password'>Password</label>
            <button
              className='show-hide'
              onClick={(e) => {
                e.preventDefault()
                setShowPassword((prev) => !prev)
              }}></button>
            <div className={passwordFieldValid === false ? 'error' : 'success'}>
              {passwordFieldValid === false ? (
                <>
                  <Error />
                  &nbsp;A password with 4 characters is required
                </>
              ) : passwordFieldValid === true ? (
                <Success />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='field show'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirm-password'
              id='confirm-password'
              placeholder=' '
              value={confirmPasswordField}
              onChange={(e) => setConfirmPasswordField(e.target.value)}
              onBlur={(e) => {
                let v = e.target.value
                console.log('Validating confirm password', v)
                if (v === passwordField) setConfirmPasswordFieldValid(true)
                else setConfirmPasswordFieldValid(false)
              }}
            />
            <label htmlFor='confirm-password'>Confirm Password</label>
            <button
              className='show-hide'
              onClick={(e) => {
                e.preventDefault()
                setShowConfirmPassword((prev) => !prev)
              }}></button>
            <div className={confirmPasswordFieldValid === false ? 'error' : 'success'}>
              {confirmPasswordFieldValid === false ? (
                <>
                  <Error />
                  &nbsp;Does not match
                </>
              ) : confirmPasswordFieldValid === true ? (
                <Success />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='field'>
            <input
              type='submit'
              name='submit'
              value='Submit'
              onClick={(e) => {
                e.preventDefault()
                alert(`Creating account with name "${nameField}", email "${emailField}" and password "${passwordField}"`)
              }}
              disabled={!nameFieldValid || !emailFieldValid || !passwordFieldValid || !confirmPasswordFieldValid}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
