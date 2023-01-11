import './style/styles.css'
import { useState, useRef } from 'react'

function Landing({ setPage, setYouPick, setComputerPick, rockImg, scissorsImg, paperImg }) {
  const getPic = (type) => (type === 'rock' ? rockImg : type === 'scissors' ? scissorsImg : paperImg)
  const options = [
    { name: 'rock', image: rockImg },
    { name: 'scissors', image: scissorsImg },
    { name: 'paper', image: paperImg }
  ]
  return (
    <div className='body'>
      <div className='wrapper'>
        <h1>pick one</h1>
        <ul>
          {options.map((option, i) => (
            <li
              className='pick-one'
              key={option.name}>
              <button
                onClick={() => {
                  setYouPick(option.name)
                  setComputerPick(options[Math.floor(Math.random() * 3)].name)
                  setPage('winner')
                }}>
                <img
                  id={i}
                  src={getPic(option.name)}
                  alt={option.name}
                />
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Winner({ setPage, computerPick, youPick, rockImg, scissorsImg, paperImg }) {
  const handlePlayAgain = () => {
    setPage('landing')
  }

  const getImage = (pick) => (pick === 'rock' ? require('./images/rock.png') : pick === 'scissors' ? require('./images/scissors.png') : require('./images/paper.png'))
  const computerImage = getImage(computerPick)
  const youImage = getImage(youPick)

  const winnerClass =
    computerPick === youPick
      ? 'no-one-wins'
      : (computerPick === 'rock' && youPick === 'scissors') || //
        (computerPick === 'scissors' && youPick === 'paper') ||
        (computerPick === 'paper' && youPick === 'rock')
      ? 'computer-wins'
      : 'you-win'

  return (
    <div className={`body winner ${winnerClass}`}>
      <div className='wrapper'>
        <div className='you-pick'>
          <h1 className='you-win'>you win</h1>
          <img
            src={youImage}
            alt={youPick}
          />
        </div>
        <div className='computer-pick'>
          <h1 className='computer-wins'>computer wins</h1>
          <img
            src={computerImage}
            alt={computerPick}
          />
        </div>
        <div className='no-one-pick'>
          <h1 className='no-one-wins'>no-one wins</h1>
        </div>
        <button
          className='play-again'
          onClick={handlePlayAgain}>
          play again?
        </button>
      </div>
    </div>
  )
}

export default function RockPaperScissors() {
  const [page, setPage] = useState('landing')
  const [computerPick, setComputerPick] = useState(null)
  const [youPick, setYouPick] = useState(null)

  const testing = false

  const rockImg = useRef(require('./images/rock.png'))
  const paperImg = useRef(require('./images/paper.png'))
  const scissorsImg = useRef(require('./images/scissors.png'))

  return (
    <div className='aoj-12'>
      {page === 'landing' ? (
        <Landing
          setYouPick={setYouPick}
          setComputerPick={setComputerPick}
          setPage={setPage}
          rockImg={rockImg.current}
          paperImg={paperImg.current}
          scissorsImg={scissorsImg.current}
        />
      ) : (
        <Winner
          setPage={setPage}
          computerPick={testing ? 'paper' : computerPick}
          youPick={testing ? 'paper' : youPick}
          rockImg={rockImg.current}
          paperImg={paperImg.current}
          scissorsImg={scissorsImg.current}
        />
      )}
    </div>
  )
}
