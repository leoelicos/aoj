export default function Toaster() {
  return (
    <div className='aoj-23'>
      <div className='body'>
        <div className='toaster'>
          <div className='close'>
            <button
              className='close-toaster'
              id='closeToaster'>
              <img
                src='./images/close.svg'
                alt='Close'
              />{' '}
              Close
            </button>
          </div>
          <img
            src='./images/cover.jpg'
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
              <label for='email'>Email Address</label>
              <input
                type='email'
                name='email'
                id='email'
              />
            </div>
            <button
              className='submit'
              id='submit'>
              <img
                src='./images/arrow.svg'
                alt='Arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
