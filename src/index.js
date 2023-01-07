import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './99__error/error-page'

import './style/main.css'
import './style/normalize.css'

import Toc from './00__toc'
import PomodoroTimer from './01__pomodoro-timer/index.jsx'
import ECommerceComponent from './02__ecommerce-component/index.jsx'
import Piano from './03__creating-a-piano/index.jsx'
import ComputerKeyboard from './04__computer-keyboard/index.jsx'
import EpisodeListing from './05__episode-listing/index.jsx'
import RangeSlider from './06__range-slider/index.jsx'
import TipCalculator from './07__tip-calculator/index.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Toc />, errorElement: <ErrorPage /> },
  { path: '01-pomodoro-timer', element: <PomodoroTimer />, errorElement: <ErrorPage /> },
  { path: '02-ecommerce-component', element: <ECommerceComponent />, errorElement: <ErrorPage /> },
  { path: '03-creating-a-piano', element: <Piano />, errorElement: <ErrorPage /> },
  { path: '04-computer-keyboard', element: <ComputerKeyboard />, errorElement: <ErrorPage /> },
  { path: '05-episode-listing', element: <EpisodeListing />, errorElement: <ErrorPage /> },
  { path: '06-range-slider', element: <RangeSlider />, errorElement: <ErrorPage /> },
  { path: '07-tip-calculator', element: <TipCalculator />, errorElement: <ErrorPage /> }
])

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
