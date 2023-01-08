import { ReactComponent as ScatteredClouds } from './images/cloudy.svg'
import { ReactComponent as FewClouds } from './images/partly-cloudy.svg'
import { ReactComponent as Rain } from './images/rainy.svg'
import { ReactComponent as Snow } from './images/snowy.svg'
import { ReactComponent as Thunderstorm } from './images/stormy.svg'
import { ReactComponent as ClearSky } from './images/sunny.svg'

import { ReactComponent as Humidity } from './images/precipitation.svg'
import { ReactComponent as MinTemp } from './images/low.svg'

import './style/styles.css'
import { useEffect, useState } from 'react'
const { REACT_APP_08_IP_KEY, REACT_APP_08_WEATHER_APIKEY } = process.env
if (!REACT_APP_08_IP_KEY || !REACT_APP_08_WEATHER_APIKEY) console.error('Environment variables undefined')

const getClass = (iconCode) => {
  if (iconCode === undefined) return 'sunny'
  const identifier = iconCode.slice(0, 2)
  switch (identifier) {
    case '01':
      return 'sunny'
    case '02':
      return 'partly-cloudy'
    case '03':
      return 'cloudy'
    case '04':
      return 'partly-cloudy'
    case '09':
      return 'rainy'
    case '10':
      return 'rainy'
    case '11':
      return 'stormy'
    case '13':
      return 'snowy'
    case '50':
      return 'cloudy'
  }
}
const getSVG = (iconCode) => {
  if (iconCode === undefined) return <ClearSky />
  const identifier = iconCode.slice(0, 2)
  switch (identifier) {
    case '01':
      return <ClearSky />
    case '02':
      return <FewClouds />
    case '03':
      return <ScatteredClouds />
    case '04':
      return <FewClouds />
    case '09':
      return <Rain />
    case '10':
      return <Rain />
    case '11':
      return <Thunderstorm />
    case '13':
      return <Snow />
    case '50':
      return <ScatteredClouds />
  }
}

export const WeatherApp = () => {
  let lat, lon, city
  const ipRegistryKey = REACT_APP_08_IP_KEY
  const weatherApiKey = REACT_APP_08_WEATHER_APIKEY

  const [finalData, setFinalData] = useState([{ day: '—', date: '0', max: 0, min: 0, humidity: 0 }])

  const getWeather = async () => {
    const week = []
    //ipregistry
    const ipSerialized = await fetch(`https://api.ipregistry.co/?key=${ipRegistryKey}`)
    const ip = await ipSerialized.json()

    lat = ip.location.latitude
    lon = ip.location.longitude
    city = ip.location.city

    // openweathermap
    const owmSerialized = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,current&appid=${weatherApiKey}&units=metric&lang=en`)
    const owm = await owmSerialized.json()
    const { daily } = owm

    for (let {
      dt,
      temp: { max },
      temp: { min },
      humidity,
      weather: {
        0: { icon }
      }
    } of daily) {
      let d = new Date(dt * 1000)
      let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()]
      let date = d.getDate().toString()
      max = max.toFixed(0)
      min = min.toFixed(0)
      humidity = humidity.toString()
      if (week.length < 7) week.push({ day, date, max, min, humidity, icon })
    }
    setFinalData(week)
    return week
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className='aoj-08'>
      <div className='body'>
        <div className='wrapper'>
          {finalData.map((x) => (
            <div
              className='day'
              key={x.day}>
              <div className='day-of-week'>{x.day}</div>
              <div className='date'>{x.date}</div>

              <div className={`bar ${getClass(x.icon)}`}>
                <div className='weather'>{getSVG(x.icon)}</div>
                <div className='temperature'>
                  {x.max}
                  <span className='degrees'>&deg;</span>
                </div>
                <div className='content'>
                  <div className='precipitation'>
                    <Humidity />
                    {x.humidity}%
                  </div>
                  <div className='low'>
                    <MinTemp />
                    {x.min}&deg;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
