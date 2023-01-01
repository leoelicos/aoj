/* import { StrictMode } from 'react'
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
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(sendToVercelAnalytics)
