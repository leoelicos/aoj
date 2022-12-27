import './toc.css'
import apps from './apps.json'
const { list } = apps

function Toc() {
  return (
    <section className='link-container'>
      {list.map(({ name, link }) => (
        <a
          key={name}
          href={link}
          className='link'>
          {name.replace(' ', '\n')}
        </a>
      ))}
    </section>
  )
}

export default Toc
