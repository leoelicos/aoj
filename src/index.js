// import { StrictMode } from 'react'
import React from 'react'
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
import WeatherApp from './08__weather-app/index.jsx'
import ImageCarousel from './09__image-carousel/index.jsx'
import VerificationCode from './10__verification-code/index.jsx'
import FAQs from './11__expanding-collapsing-faqs/index.jsx'
import RockPaperScissors from './12__rock-paper-scissors'
import CustomModal from './13__custom-modal'
import CalendarPicker from './14__calendar-picker'
import YoutubeAPI from './15__youtube-api'
import StarRating from './16__star-rating'
import SidebarHighlight from './17__sidebar-highlight'
import PasswordGenerator from './18__password-generator'
import SignupForm from './19__signup-form'
import TabComponent from './20__tab-component'
import SimplifiedBudget from './21__simplified-budget'
import CreditCardForm from './22__credit-card-form'

const router = createBrowserRouter([
  { path: '/', element: <Toc />, errorElement: <ErrorPage /> },
  { path: '01-pomodoro-timer', element: <PomodoroTimer />, errorElement: <ErrorPage /> },
  { path: '02-ecommerce-component', element: <ECommerceComponent />, errorElement: <ErrorPage /> },
  { path: '03-creating-a-piano', element: <Piano />, errorElement: <ErrorPage /> },
  { path: '04-computer-keyboard', element: <ComputerKeyboard />, errorElement: <ErrorPage /> },
  { path: '05-episode-listing', element: <EpisodeListing />, errorElement: <ErrorPage /> },
  { path: '06-range-slider', element: <RangeSlider />, errorElement: <ErrorPage /> },
  { path: '07-tip-calculator', element: <TipCalculator />, errorElement: <ErrorPage /> },
  { path: '08-weather-app', element: <WeatherApp />, errorElement: <ErrorPage /> },
  { path: '09-image-carousel', element: <ImageCarousel />, errorElement: <ErrorPage /> },
  { path: '10-verification-code', element: <VerificationCode />, errorElement: <ErrorPage /> },
  { path: '11-expanding-collapsing-faqs', element: <FAQs />, errorElement: <ErrorPage /> },
  { path: '12-rock-paper-scissors', element: <RockPaperScissors />, errorElement: <ErrorPage /> },
  { path: '13-custom-modal', element: <CustomModal />, errorElement: <ErrorPage /> },
  { path: '14-calendar-picker', element: <CalendarPicker />, errorElement: <ErrorPage /> },
  { path: '15-youtube-api', element: <YoutubeAPI />, errorElement: <ErrorPage /> },
  { path: '16-star-rating', element: <StarRating />, errorElement: <ErrorPage /> },
  { path: '17-sidebar-highlight', element: <SidebarHighlight />, errorElement: <ErrorPage /> },
  { path: '18-password-generator', element: <PasswordGenerator />, errorElement: <ErrorPage /> },
  { path: '19-signup-form', element: <SignupForm />, errorElement: <ErrorPage /> },
  { path: '20-tab-component', element: <TabComponent />, errorElement: <ErrorPage /> },
  { path: '21-simplified-budget', element: <SimplifiedBudget />, errorElement: <ErrorPage /> },
  { path: '22-credit-card-form', element: <CreditCardForm />, errorElement: <ErrorPage /> }
])

const rootEl = document.getElementById('root')
createRoot(rootEl).render(<RouterProvider router={router} />)
