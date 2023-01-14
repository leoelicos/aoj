import data from './data/app'
import './style/styles.css'

import { ReactComponent as Previous } from './images/chevron--left.svg'
import { ReactComponent as Next } from './images/chevron--right.svg'
import { ReactComponent as Edit } from './images/edit.svg'
import { ReactComponent as Sort } from './images/sort.svg'
import { ReactComponent as Update } from './images/update.svg'
import { useState } from 'react'

function TableHeader({ sort, setSort }) {
  const { field, type } = sort
  const headings = ['ID', 'Name', 'Email Address', 'Job Title']
  const sortTypes = ['ascending', 'descending', '']
  return (
    <thead>
      <tr>
        {headings.map((heading, i) => (
          <th
            key={heading.name}
            className={i === 0 ? 'header__id' : ''}>
            {heading.name}
            <button
              className={`sort ${field === i ? type : ''}`}
              onClick={() => {
                setSort((prev) => {
                  if (prev.field === i) {
                    let idx = sortTypes.indexOf(prev.type)
                    let newIdx = (idx + 1) % 3
                    return { field: i, type: sortTypes[newIdx] }
                  } else {
                    return { field: i, type: 'ascending' }
                  }
                })
              }}>
              <Sort />
            </button>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default function TableOfData() {
  const [employees, setEmployees] = useState(data)
  const [sort, setSort] = useState({ field: 0, type: 'ascending' })

  return (
    <div className='aoj-24'>
      <div className='body'>
        <div className='wrapper'>
          <table
            cellPadding='0'
            cellSpacing='0'
            width='100%'>
            <TableHeader
              sort={sort}
              setSort={setSort}
            />

            <tbody>
              {/* ADD A CLASS OF EDIT, IF YOU TO DISPLAY THE FORM FIELDS */}
              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled={false}
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>

              <tr className='edit'>
                <td>1</td>
                <td className='name'>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-name-1'
                    value='Cameron Williamson'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-email-1'
                    value='cameron.williams@example.com'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    disabled='disabled'
                    name='person-title-1'
                    value='Software Developer'
                  />
                </td>
                <td>
                  <button
                    className='update'
                    name='person-update-1'
                    id='personUpdate1'>
                    <Update className='update' />
                  </button>
                  <button
                    className='edit'
                    name='person-edit-1'
                    id='personEdit1'>
                    <Edit className='edit' />
                  </button>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan='2'>30 Results</td>
                <td colSpan='3'>
                  <div className='pagination edit'>
                    <button
                      className='previous'
                      id='previous'>
                      <Previous />
                    </button>

                    <input
                      type='text'
                      name='currentPage'
                      value='1'
                      id='currentPage'
                    />

                    <span>&nbsp;of&nbsp;</span>
                    <span id='totalPages'>3</span>

                    <button
                      className='next'
                      id='next'>
                      <Next />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
