import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './99__error/error-page'

import './style/main.css'
import './style/normalize.css'

import Toc from './00__toc'
import PomodoroTimer from './01__pomodoro-timer'

const router = createBrowserRouter([
  { path: '/', element: <Toc />, errorElement: <ErrorPage /> },
  { path: '01-pomodoro-timer', element: <PomodoroTimer /> }
])

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
