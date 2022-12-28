import './toc.css'
import apps from './apps.json'
import { Link } from 'react-router-dom'

const { list } = apps

function Toc() {
  return (
    <section className='link-container'>
      {list.map(({ name, link }) => (
        <Link
          key={name}
          to={link}
          className='link'>
          {name.replace(' ', '\n')}
        </Link>
      ))}
    </section>
  )
}

export default Toc
