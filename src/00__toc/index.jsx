import apps from './data/apps.json'
import { Link } from 'react-router-dom'
import './style/toc.css'

const { list } = apps

function Toc() {
  return (
    <div className='toc'>
      <div className='body'>
        <section className='link-container'>
          {list.map(({ name, link }) => {
            if (name === 'break')
              return (
                <Link
                  key='break'
                  to={null}
                  className='link break'
                />
              )
            else
              return (
                <Link
                  key={name}
                  to={link}
                  className='link'>
                  {name.replace(' ', '\n')}
                </Link>
              )
          })}
        </section>
      </div>
    </div>
  )
}

export default Toc
