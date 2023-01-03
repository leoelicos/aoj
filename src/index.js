import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './99__error/error-page'

import './style/main.css'
import './style/normalize.css'

import Toc from './00__toc'
import PomodoroTimer from './01__pomodoro-timer'
import ECommerceComponent from './02__ecommerce-component'
import Piano from './03__creating-a-piano'

const router = createBrowserRouter([
  { path: '/', element: <Toc />, errorElement: <ErrorPage /> },
  { path: '01-pomodoro-timer', element: <PomodoroTimer />, errorElement: <ErrorPage /> },
  { path: '02-ecommerce-component', element: <ECommerceComponent />, errorElement: <ErrorPage /> },
  { path: '03-creating-a-piano', element: <Piano />, errorElement: <ErrorPage /> }
])

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
