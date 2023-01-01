import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'

import './normalize.css'
import Toc from './Toc'
import PomodoroTimer from './01__pomodoro-timer/PomodoroTimer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Toc />,
    errorElement: <ErrorPage />
  },
  {
    path: '01-pomodoro-timer',
    element: <PomodoroTimer />
  }
])

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
